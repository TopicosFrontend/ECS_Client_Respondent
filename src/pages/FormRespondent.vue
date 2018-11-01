<template>
    <div>
        <h5>Bienvenido CFN= {{cfn}}; ECN= {{ecn}}</h5>
        <h6 v-if="title !== undefined" v-text="title"></h6>
        <p v-if="date_form !== undefined">La última modificación fue el <span v-text="date_form"></span> </p>
        <div class="d-flex justify-content-center">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active selected" @click="change_section(0)" href="#">Address section</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" @click="change_section(1)" href="#">Person section</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" @click="change_section(2)" href="#">Dwelling section</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" @click="change_section(3)" href="#">Feedback section</a>
                </li>
            </ul>
        </div>
        <section-form ref="section_form_ref" :form="section_form" @listen:event="nextSection"></section-form>
        <button class="btn btn-light" @click="send_form">Guardar</button>
        <button v-if="is_census_nigth" class="btn btn-success" @click="confirm_form">Confirmar</button>
    </div>
</template>

<script>
import SectionForm from "@/components/SectionForm";
import axios from "axios";

export default {
    name: 'FormRespondent',
    props: ["cfn", "ecn"],
    data(){
        return {
            sections_user: undefined,
            form_user: undefined,
            section_form: undefined, 
            title: undefined, 
            date_form: undefined,
            index_section: 0,
            is_census_nigth: false
        }
    },
    components: {
        SectionForm
    },
    mounted(){
        let req = {cfn: this.cfn, ecn: this.ecn};
        let headers = { headers: { 'Content-type': 'application/json'}};
        this.init_form(formulario);
        
        /*axios.get(process.env.ROOT_API + "/user/login/", req, headers).then(response => {/*{state:Boolean, msg: String, form: Form}*//*
                let is_correct_response;
                if (response.state == true) {
                    is_correct_response = this.init_form(response.form);
                    if(!is_correct_response){
                        alert("Se produjo un error, vuelve a intentarlo más tarde");
                    }
                }else{
                    alert(response.msg)
                }
            }).catch(err => {
                console.log(err);
                alert("Se produjo un error, vuelve a intentarlo más tarde");
            });*/
            /*axios.get(process.env.ROOT_API + "/user/is_census_nigth/").then(response => {/*{state: Boolean, msg: String, is_census_nigth: String}*/
                /*if (response.state == true) {
                    this.is_census_nigth = response.is_census_nigth;
                }else{
                    alert(response.msg)
                }
            }).catch(err => {
                console.log(err);
            });*/
    },
    methods: {
        init_form: function(form){
            if (form.secciones === undefined || form.titulo === undefined) {
                return false;
            }
            this.form_user = form;
            this.title = form.titulo; 
            this.date_form = form.fecha;
            this.sections_user = [];
            for (let i = 0; i < form.secciones.length; i++) {
                this.sections_user[i] = {}
                this.sections_user[i]["title"] = form.secciones[i].titulo;
                this.sections_user[i]["inputs"] = [];
                this.sections_user[i]["button"] = {};
                this.sections_user[i]["button"]["textButton"] = "Siguiente Sección";
                this.sections_user[i]["button"]["active"] = true;
                this.sections_user[i]["button_aux"] = {};
                this.sections_user[i]["button_aux"]["textButton"] = "Anterior Sección";
                this.sections_user[i]["button_aux"]["active"] = true;
                for (let j = 0; j < form.secciones[i].preguntas.length; j++) {
                    let element = form.secciones[i].preguntas[j];
                    this.sections_user[i]["inputs"][j] = {};
                    if (element.opciones === undefined) {
                        this.sections_user[i]["inputs"][j]["label"] = element.enunciado;
                        this.sections_user[i]["inputs"][j]["type"] = "text";
                        this.sections_user[i]["inputs"][j]["active"] = true;
                        this.sections_user[i]["inputs"][j]["id"] = "input-"+j;
                        this.sections_user[i]["inputs"][j]["res"] = "";
                    } else {
                        this.sections_user[i]["inputs"][j]["label"] = element.enunciado;
                        this.sections_user[i]["inputs"][j]["type"] = "radio";
                        this.sections_user[i]["inputs"][j]["active"] = true;
                        this.sections_user[i]["inputs"][j]["id"] = "input-"+j;
                        this.sections_user[i]["inputs"][j]["options"] = [];
                        this.sections_user[i]["inputs"][j]["res"] = element.respuesta;
                        for (let z = 0; z < element.opciones.length; z++) {
                            this.sections_user[i]["inputs"][j]["options"][z] = {};
                            this.sections_user[i]["inputs"][j]["options"][z]["value"] = element.opciones[z];
                            this.sections_user[i]["inputs"][j]["options"][z]["text"] = element.opciones[z];
                            this.sections_user[i]["inputs"][j]["options"][z]["name"] = element.opciones[z];
                            this.sections_user[i]["inputs"][j]["options"][z]["checked"] = true;
                        }
                    }
                }
            }
            this.section_form = this.sections_user[this.index_section];
            return true;
        },
        nextSection: function (msg) {
            this.save_form(msg, this.index_section);
            if (msg.button == "next") {
                this.index_section++;
                if(this.index_section >= this.sections_user.length){
                    this.index_section = 0;
                }
            }else{
                this.index_section--;
                if(this.index_section < 0){
                    this.index_section = this.sections_user.length-1;
                }
            }
            this.section_form = this.sections_user[this.index_section];
            this.refresh_nav(this.index_section);
        },
        save_form: function(answers, index){
            for (let i = 0; i < this.form_user.secciones[index].preguntas.length; i++) {
                let element = this.form_user.secciones[index].preguntas[i];
                element.respuesta = answers["input-"+i];
            }
        },
        send_form: function() {
            let headers = { headers: { 'Content-type': 'application/json'}};
            this.$refs.section_form_ref.acton_event();
            axios.post(process.env.ROOT_API + "/user/save_form/", this.form_user, headers).then(response => {/*{state: Boolean, msg: String}*/
                if (response.state == true) {
                    alert("Se ha salvado con exito");
                }else{
                    alert(response.msg)
                }
            }).catch(err => {
                console.log(err);
                alert("Se produjo un error, vuelve a intentarlo más tarde");
            });
        },
        confirm_form: function(){
            axios.post(process.env.ROOT_API + "/user/confirm_form/").then(response => {/*{state: Boolean, msg: String}*/
                let is_correct_response;
                if (response.state == true) {
                    alert("Se ha confirmado con exito");
                }else{
                    alert(response.msg)
                }
            }).catch(err => {
                console.log(err);
                alert("Se produjo un error, vuelve a intentarlo más tarde");
            });
        },
        change_section: function(index){
            switch(index){
                case 0:
                    this.index_section = 0;
                    this.section_form = this.sections_user[this.index_section];
                    break;
                case 1:
                    this.index_section = 1;
                    this.section_form = this.sections_user[this.index_section];
                    break;
                case 2:
                    this.index_section = 22;
                    this.section_form = this.sections_user[this.index_section];
                    break;
                case 3:
                    this.index_section = 28;
                    this.section_form = this.sections_user[this.index_section];
                    break;
            }
            this.refresh_nav(this.index_section);
        },
        refresh_nav: function(index){
            let elements = this.$el.querySelectorAll(".active");
            for (const iterator of elements) {
                iterator.className = "nav-link active";
            }
            if(index == 0){
                elements[0].className = "nav-link active selected";
            }else if(index > 0 && index < 22){
                elements[1].className = "nav-link active selected";
            }else if(index > 22 && index < 28){
                elements[2].className = "nav-link active selected";
            }else{
                elements[3].className = "nav-link active selected";
            }
        }
    }
}

/*Formato de Formulario */
let formulario = {
    titulo: "String",
    fecha: "Date",
    codigo: "String",
    secciones: [
        {
            titulo: "String",
            preguntas: [
                {
                    enunciado: "String",
                    respuesta: "",
                    /*Si es con opciones */
                    opciones: [
                        "String1", "String2", "String3"
                    ]
                },
                {
                    enunciado: "String",
                    respuesta: "",
                }
            ]
        },
        {
            titulo: "String",
            preguntas: [
                {
                    enunciado: "String",
                    respuesta: ""
                },
                {
                    enunciado: "String",
                    respuesta: ""
                },
                {
                    enunciado: "String",
                    respuesta: "",
                    /*Si es con opciones */
                    opciones: [
                        "String1", "String2", "String3"
                    ]
                }
            ]
        }
    ]
}
</script>

<style scoped>
a.nav-link{
    color: #495057;
}
a.nav-link.selected{
    background-color: #495057;
    color: #fff;
}
</style>
