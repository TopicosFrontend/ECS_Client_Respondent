<template>
    <div class="container-fluid componentLogin d-flex justify-content-center align-items-center">
        <div class="row totalWidth justify-content-center">
            <div class="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
                <div class="container cardLogin">
                    <div class="row">
                        <div class="col">
                            <h5 v-text="title"></h5>
                            <br />
                            <p v-text="description" class="textAlignLeft"></p>
                            <hr />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <form>
                                <div v-for="(item, index) in inputs" class="form-group" v-if="item.active" :key="index">
                                    <label :for="item.id" v-text="item.label" class="textAlignLeft d-block"></label>
                                    <input :type="item.type" class="form-control" 
                                            :id="item.id" :placeholder="item.placeholder"
                                            v-model="item.res">
                                </div>
                                <button @click="login" class="btn btn-primary" v-text="textButton"></button>
                            </form>
                            <hr />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div v-for="(item, index) in links" v-if="item.active" :key="index" class="d-flex">
                                <p v-text="item.description"></p>
                                <router-link :to="item.link"><p v-text="item.span"></p></router-link>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p v-text="note" class="textAlignLeft"></p>
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
    data(){
        return {
            title: "Republica de Bolumbia - Censo poblacional",
            description: "Ingresa con tus credenciales para comenzar el censo",
            inputs: [
                {
                    label: "Código CFN",
                    placeholder: "Ingrese se código CFN",
                    type: "text",
                    active: true,
                    id: "input-cfn",
                    res: ""
                },
                {
                    label: "Código ECN",
                    placeholder: "Ingrese se código ECN",
                    type: "text",
                    active: true,
                    id: "input-ecn",
                    res: ""
                },
                {
                    label: "",
                    placeholder: "",
                    type: "text",
                    active: false,
                    id: "",
                    res: ""
                }
            ],
            textButton: "Ingresar",
            links: [{
                    description: "olvido contraseña, haz click",
                    span: "aqui",
                    link: "/FormRespondent",
                    active: false
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
    },
    methods:{
        login: function(){/*Este codigo se debe de replantear para según las necesidades*/
            let req = {cfn: this.inputs[0].res, ecn: this.inputs[1].res}
            /*axios
            .get(process.env.ROOT_API + this.endPoint/)
                .then(response => {
                    
                });
            });*/
        }
    }
}
</script>

<style scoped>
.componentLogin{
    height: 100vh;
}
.cardLogin{
    border: solid 1px #adadad;
    padding-top: 1em;
    padding-bottom: 1em;
}
.totalWidth{
    width: 100%;
}
</style>
