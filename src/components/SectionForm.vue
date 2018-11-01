<template>
    <div class="container-fluid">
        <div class="row totalWidth justify-content-center">
            <div class="cardSectionForm col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
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
                            <form v-on:submit.prevent="">
                                <div v-for="(item, index) in parameters.inputs" class="form-group" v-if="item.active" :key="index">
                                    <label :for="item.id" v-text="item.label" class="textAlignLeft d-block"></label>
                                    <input v-if="item.type != 'radio' && item.type != 'checkbox'" :type="item.type" class="form-control" 
                                            :id="item.id" :placeholder="item.placeholder"
                                            v-model="item.res">
                                    <div v-else>
                                        <div v-for="(option, oindex) in item.options" :key="oindex" class="d-flex inputOption">
                                            <input :type="item.type" class="form-check-input"
                                                :name="option.name"
                                                :checked="option.checked"
                                                :value="option.value"
                                                :id="oindex"
                                                v-model="item.res"> {{option.text}}
                                        </div>
                                        
                                    </div>
                                </div>
                                <button @click="acton_event_aux" v-if="parameters.button_aux !== undefined && parameters.button_aux.active" class="btn btn-primary" v-text="parameters.button_aux.textButton"></button>
                                <button @click="acton_event" v-if="parameters.button !== undefined && parameters.button.active" class="btn btn-primary" v-text="parameters.button.textButton"></button>
                            </form>
                            <hr />
                        </div>
                    </div>
                    <div class="row" v-if="parameters.links !== undefined">
                        <div class="col">
                            <div v-for="(item, index) in parameters.links" v-if="item.active" :key="index" class="d-flex">
                                <p v-text="item.description"></p>
                                <router-link :to="item.link"><p v-text="item.span"></p></router-link>
                            </div>
                        </div>
                    </div>
                    <div class="row" v-if="parameters.note !== undefined">
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

export default {
    name: 'ECSRespondent',
    props: ["form"],
    data(){
        return {
            parameters: {
                title: "Login",
                description: "Ingresa con tus credenciales para comenzar",
                inputs: [
                    {
                        label: "usuario",
                        placeholder: "Ingrese su usuario",
                        type: "text",
                        active: true,
                        id: "input-user",
                        res: "",
                        name: "",
                        value: ""
                    },
                    {
                        label: "Contraseña",
                        placeholder: "Ingrese su contraseña",
                        type: "password",
                        active: true,
                        id: "input-ecn",
                        res: "",
                        name: "",
                        value: ""
                    },
                    {/*Input de opciones */
                        label: "Genero",
                        type: "checkbox",/*radio*/
                        active: true,
                        id: "genero",
                        res: "",
                        options: [
                            {
                                name: "genero", /*igual en radio */
                                value: "femenino",
                                checked: true,
                                text: "Femenino"
                            },
                            {
                                name: "genero", 
                                value: "masculino",
                                checked: false,
                                text: "Masculino"
                            }
                        ]
                    }
                ],
                button: {
                    textButton: "Ingresar",
                    active: true
                },
                button_aux: {
                    textButton: "Ingresar",
                    active: false
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
                note: "Comunicate al xxxxxx"
            }
        }
    },
    mounted(){
        if (this.form !== undefined) {
            this.parameters = this.form;
        }
    },
    watch:{
        form: function () {
            if (this.form !== undefined) {
                this.parameters = this.form;
            }
        }
    },
    methods:{
        acton_event: function(){
            let json_response = {button: "next"};
            for (const iterator of this.parameters.inputs) {
                if(iterator.active){
                    json_response[iterator.id]= iterator.res;
                }
            }
            this.$emit('listen:event', json_response);
        },
        acton_event_aux: function(){
            let json_response = {button: "previus"};
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
.inputOption{
    padding-left: 1.5rem;
}
</style>
