<template>
    <div class="container-page-form-respondent">
        <div class="container-fluid header-respondent">
            <div class="row">
                <div class="col-4">
                    <img class="logoBolumbia" src="../assets/bolumbialogo.jpg" alt="Logo Bolumbia">
                </div>
                <div class="col-6 header-title d-flex align-self-center">
                    <p>Censo electrónico de Bolumbia</p>
                </div>
                <div class="col-2 d-flex align-self-center">
                    <button @click="logout" class="btn btn-danger">Salir</button>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
                <div class="col-11 col-md-10 col-lg-8 descriptionCensus">
                    <h5>Bienvenido CFN= {{cfn}}; ECN= {{ecn}}</h5>
                    <h6 v-if="title !== undefined" v-text="title"></h6>
                    <p v-if="date_form !== undefined">La última modificación fue el <span v-text="date_form"></span> </p>
                    <p>Esta es la página oficial del censo electrónico de la republica de Bolumbia, debe de responder
                        todas las preguntas completamente, puede realizar las siguientes acciones:
                    </p>
                    <div>
                        <ol class="text-left">
                            <li>Guardar los cambios y continuar otro día</li>
                            <li>Enviar todo el formulario, con esta acción estan afirmando que terminaron el censo</li>
                            <li>El último día del censo va estar activado el boton de confirmar, debe realizar esta acción</li>
                        </ol>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active selected" @click="change_section(0)" href="#">Sección de vivienda</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" @click="change_section(1)" href="#">Sección de persona</a>
                </li>
            </ul>
        </div>
        <div class="sectionFormPrincipal">
            <section-form ref="section_form_ref" :form="section_form" @listen:event="nextSection"></section-form>
        </div>
        
        <button class="btn btn-primary" @click="send_form">Guardar</button>
        <button class="btn btn-success" @click="finish_form">Terminar censo</button>
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
        
        /*{state:Boolean, msg: String, form: Form}*/
        /*axios.get(process.env.ROOT_API + "/user/login/", req, headers).then(response => {
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
            if (form.secciones === undefined) {
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
                    alert(response.data.msg)
                }
            }).catch(err => {
                console.log(err);
                alert("Se produjo un error, vuelve a intentarlo más tarde");
            });
        },
        finish_form: function(){
            let headers = { headers: { 'Content-type': 'application/json'}};
            this.$refs.section_form_ref.acton_event();
            console.log(this.form_user.codigo);
            
            axios.post(process.env.ROOT_API + "/user/end_form/", this.form_user.codigo, headers).then(response => {/*{state: Boolean, msg: String}*/
                if (response.state == true) {
                    alert("Ha finalizado el censo correctamente, recuerde confirmar la última noche");
                }else{
                    alert(response.data.msg)
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
            switch(index){/* las 3 primeras para vivienda, las otras tres para personas */
                case 0:
                    this.index_section = 0;
                    this.section_form = this.sections_user[this.index_section];
                    break;
                case 1:
                    this.index_section = 1;
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
            if(index >= 0 && index <= 2){
                elements[0].className = "nav-link active selected";
            }else if(index >= 3 && index <= 6){
                elements[1].className = "nav-link active selected";
            }
        },
        logout: function(){
            this.$router.push({path: "/"})
        }
    }
}

/*Formato de Formulario */
var formulario = {
    "titulo": "CUESTIONARIO CENSO",
    "fecha": "2018",
    "codigo": {"cfn": "1-10", "ecn": "p"},
    "secciones": [
        {
            "titulo": "DATOS DE LA VIVIENDA",
            "preguntas": [
                {
                    "enunciado": "INDIQUE EL TIPO DE VIVIENDA",
                    "respuesta": "",
                    "opciones": [
                        "Casa",
                        "Departamento en edificio",
                        "Vivienda tradicional indígena",
                        "Pieza en casa antigua",
                        "Mediagua, mejora, rancho o choza",
                        "Móvil (carpa, casa rodante o similar)",
                        "Otro tipo de vivienda particular"
                    ]
                },
                {
                    "enunciado": "INDIQUE SI LA VIVIENDA ESTÁ",
                    "respuesta": "",
                    "opciones": [
                        "Con moradores presentes",
                        "Con moradores ausentes",
                        "En venta, para arriendo, abandonada u otro",
                        "De temporada (vacacional u otro)"
                    ]
                }
            ]
        },
        {
            "titulo": "DATOS DE LA VIVIENDA",
            "preguntas": [
                {
                    "enunciado": "¿CUÁL ES EL MATERIAL DE CONSTRUCCIÓN PRINCIPAL EN LAS PAREDES EXTERIORES?",
                    "respuesta": "",
                    "opciones": [
                        "Hormigón armado",
                        "Albañilería: bloque de cemento, piedra o ladrillo",
                        "Tabique forrado por ambas caras",
                        "Tabique sin forro interior",
                        "Adobe, barro, quincha, pirca u otro artesanal tradicional",
                        "Materiales precarios (lata, cartón, plástico, etc.)"
                    ]
                },
                {
                    "enunciado": "¿CUÁL ES EL MATERIAL DE CONSTRUCCIÓN PRINCIPAL EN LA CUBIERTA DEL TECHO?",
                    "respuesta": "",
                    "opciones": [
                        "Tejas o tejuelas de arcilla, metálicas, de cemento, de madera, asfálticas o plásticas",
                        "Losa hormigón",
                        "Planchas metálicas de zinc, cobre, etc. o fibrocemento",
                        "Fonolita o plancha de fieltro embreado",
                        "Paja, coirón, totora o caña",
                        "Materiales precarios (lata, cartón, plástico, etc.)"
                    ]
                },
                {
                    "enunciado": "¿CUÁL ES EL MATERIAL DE CONSTRUCCIÓN PRINCIPAL EN EL PISO?",
                    "respuesta": "",
                    "opciones": [
                        "Parquet, piso flotante, cerámico, madera, alfombra, flexit, cubrepiso u otro similar; sobre radier o vigas de madera",
                        "Radier sin revestimiento",
                        "Baldosa de cemento.",
                        "Capa de cemento sobre tierra",
                        "Tierra"
                    ]
                }
            ]
        },
        {
            "titulo": "DATOS DE LA VIVIENDA",
            "preguntas": [
                {
                    "enunciado": "¿CUÁNTAS PIEZAS DE ESTA VIVIENDA SE USAN EXCLUSIVAMENTE COMO DORMITORIO?",
                    "respuesta": "",
                    "opciones": [
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "Más"
                    ]
                },
                {
                    "enunciado": "El agua que usa esta vivienda proviene principalmente de",
                    "respuesta": "",
                    "opciones": [
                        "Red pública",
                        "Pozo o noria",
                        "Camión aljibe",
                        "Río, vertiente, estero, canal, lago, etc"
                    ]
                }
            ]
        },
        {
            "titulo": "DATOS DE LAS PERSONAS",
            "preguntas": [
                {
                    "enunciado": "¿QUÉ RELACIÓN DE PARENTESCO TIENE CON EL JEFE/a DE HOGAR?",
                    "respuesta": "",
                    "opciones": [
                        "Esposo/a o cónyuge",
                        "Conviviente por unión civil",
                        "Conviviente de hecho",
                        "Hijo/a",
                        "Hijo/a del cónyuge",
                        "Hermano/a",
                        "Padre/Madre",
                        "Cuñado/a",
                        "Suegro/a",
                        "Yerno/Nuera",
                        "Nieto/a",
                        "Abuelo/a",
                        "Otro pariente",
                        "No pariente"
                    ]
                },
                {
                    "enunciado": "¿CUÁL ES SU SEXO?",
                    "respuesta": "",
                    "opciones": [
                        "Hombre",
                        "Mujer"
                    ]
                },
                {
                    "enunciado": "¿EN QUÉ MES NACIÓ?",
                    "respuesta": "",
                    "opciones": [
                        "Enero",
                        "Febrero",
                        "Marzo",
                        "Abril",
                        "Mayo",
                        "Junio",
                        "Julio",
                        "Agosto",
                        "Septiembre",
                        "Noviembre",
                        "Diciembre"
                    ]
                },
                {
                    "enunciado": "¿EN QUÉ AÑO NACIÓ?",
                    "respuesta": ""
                }
            ]
        },
        {
            "titulo": "DATOS DE LAS PERSONAS",
            "preguntas": [
                {
                    "enunciado": "¿DONDE VIVE HABITUALMENTE?",
                    "respuesta": "",
                    "opciones": [
                        "En esta comuna",
                        "En otra comuna",
                        "En otro país"
                    ]
                },
                {
                    "enunciado": "¿EN DONDE NACIÓ USTED?",
                    "respuesta": "",
                    "opciones": [
                        "En esta comuna",
                        "En otra comuna",
                        "En otro país"
                    ]
                },
                {
                    "enunciado": "¿EN DONDE NACIÓ SU MADRE?",
                    "respuesta": "",
                    "opciones": [
                        "En esta comuna",
                        "En otra comuna",
                        "En otro país"
                    ]
                }
            ]
        },
        {
            "titulo": "DATOS DE LAS PERSONAS",
            "preguntas": [
                {
                    "enunciado": "¿ASISTE ACTUALMENTE A LA EDUCACIÓN FORMAL?",
                    "respuesta": "",
                    "opciones": [
                        "Sí",
                        "No"
                    ]
                },
                {
                    "enunciado": "¿CUÁL ES EL CURSO O AÑO MÁS ALTO APROBADO?",
                    "respuesta": "",
                    "opciones": [
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8"
                    ]
                },
                {
                    "enunciado": "EL CURSO ANTERIORMENTE DECLARADO, A CUÁL DE LOS SIGUIENTES NIVELES CORRESPONDE",
                    "respuesta": "",
                    "opciones": [
                        "Sala Cuna o Jardín Infantil",
                        "Prekínder",
                        "Kínder",
                        "Educación Básica Primaria",
                        "Preparatoria",
                        "Científico-Humanista",
                        "Técnica Profesional",
                        "Técnica Comercial, Industrial/Normalista",
                        "Magister",
                        "Doctorado"
                    ]
                }
            ]
        },
        {
            "titulo": "DATOS DE LAS PERSONAS",
            "preguntas": [
                {
                    "enunciado": "¿SE CONSIDERA PERTENECIENTE A ALGÚN PUEBLO INDÍGENA U ORIGINARIO?",
                    "respuesta": "",
                    "opciones": [
                        "Sí",
                        "No"
                    ]
                },
                {
                    "enunciado": "DURANTE LA SEMANA PASADA, ¿TRABAJÓ?",
                    "respuesta": "",
                    "opciones": [
                        "Sí, por un pago en dinero o especies",
                        "Sí, sin pago para un familiar",
                        "No, tenía empleo pero estuvo de vacaciones, con licencia, en descanso laboral, etc",
                        "No, se encontraba buscando empleo",
                        "No, estaba estudiando",
                        "No, realizó quehaceres de su hogar",
                        "No, es jubilado, pensionado o rentista",
                        "No, otra situación"
                    ]
                },
                {
                    "enunciado": "¿CUÁNTAS HIJAS E HIJOS NACIDOS HA TENIDO EN TOTAL?",
                    "respuesta": "",
                    "opciones": [
                        "Ninguno",
                        "1",
                        "2",
                        "3",
                        "Más de 3"
                    ]
                }
            ]
        }
    ]
}
</script>

<style>
.header-respondent{
    border-bottom: solid 1px gray;
    margin-bottom: 1em;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 1;
}
.logoBolumbia{
    width: 100%;
    height: auto;
    max-width: 8em;
    float: left;
}
.header-title p{
    font-size: large;
    color: #007bff;
    font-weight: bold;
    margin: 0px;
}
.container-page-form-respondent{
    width: 100%;
    padding-bottom: 1em;
    height: 100vh;
    overflow-y: auto;
    background-image: url("../assets/fondoLogin.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}
a.nav-link{
    color: #495057;
}
a.nav-link.selected{
    background-color: #495057 !important;
    color: #fff !important;
    border-color: #495057 !important;
}
.sectionFormPrincipal .cardSectionForm, .descriptionCensus {
    color: #fff;
    background-color: #000000d9;
    background-clip: content-box;
}
.descriptionCensus{
    border-radius: 5%;
    margin-bottom: 1em;
}
</style>
