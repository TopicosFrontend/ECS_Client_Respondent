<template>
    <div class="container-fluid">
        <div class="row totalWidth justify-content-center">
            <div class="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
                <div class="container cardLogin">
                    <div class="row">
                        <div class="col">
                            <h5 v-text="parameters.title"></h5>
                            <br />
                            <p v-text="parameters.description" class="textAlignLeft"></p>
                            <hr />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <form>
                                <div v-for="(item, index) in parameters.inputs" class="form-group" v-if="item.active" :key="index">
                                    <label :for="item.id" v-text="item.label" class="textAlignLeft d-block"></label>
                                    <input v-if="item.type != 'radio' || item.type != 'checkbox'" :type="item.type" class="form-control" 
                                            :id="item.id" :placeholder="item.placeholder"
                                            v-model="item.res">
                                    <div v-else>
                                        funciona
                                    </div>
                                </div>
                                <button @click="acton_event" v-if="parameters.button.active" class="btn btn-primary" v-text="parameters.button.textButton"></button>
                            </form>
                            <hr />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div v-for="(item, index) in parameters.links" v-if="item.active" :key="index" class="d-flex">
                                <p v-text="item.description"></p>
                                <router-link :to="item.link"><p v-text="item.span"></p></router-link>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p v-text="parameters.note" class="textAlignLeft"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'ECSRespondent',
    props: ["form"],
    data(){
        return {
            parameters: {
                title: "Republica de Bolumbia - Censo poblacional",
                description: "Ingresa con tus credenciales para comenzar el censo",
                inputs: [
                    {
                        label: "Código CFN",
                        placeholder: "Ingrese se código CFN",
                        type: "text",
                        active: true,
                        id: "input-cfn",
                        res: "",
                        name: "",
                        value: ""
                    },
                    {
                        label: "Código ECN",
                        placeholder: "Ingrese se código ECN",
                        type: "password",
                        active: true,
                        id: "input-ecn",
                        res: "",
                        name: "",
                        value: ""
                    },
                    {
                        label: "Genero",
                        placeholder: "",
                        type: "checkbox",/*radio*/
                        active: true,
                        id: "",
                        res: "",
                        value: "",
                        options: [
                            {
                                name: "genero", 
                                value: "femenino",
                                checked: false,
                                text: "Femenino"
                            }
                        ]
                    }
                ],
                button: {
                    textButton: "Ingresar",
                    active: true
                },
                
                links: [{
                        description: "olvido contraseña, haz click",
                        span: "aqui",
                        link: "/FormRespondent",
                        active: true
                    },
                    {
                        description: "",
                        span: "",
                        link: "",
                        active: false
                    }],
                note: "¿Los códigos no funcionan?, Llama al  2539184",
                endPoint: "/login"
            }
        }
    },
    mounted(){
        if (this.form !== undefined) {
            this.parameters = this.form;
        }
    },
    methods:{
        acton_event: function(){
            let json_response = {};
            for (const iterator of this.parameters.inputs) {
                if(iterator.active){
                    json_response[iterator.id]= iterator.res; 
                }
            }
            this.$emit('listen:event', json_response);
        }
    }
}
</script>

<style scoped>
.cardLogin{
    border: solid 1px #adadad;
    padding-top: 1em;
    padding-bottom: 1em;
}
.totalWidth{
    width: 100%;
}
</style>
