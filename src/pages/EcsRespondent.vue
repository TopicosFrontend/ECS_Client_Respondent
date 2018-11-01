<template>
    <div class="componentLogin d-flex justify-content-center align-items-center">
        <section-form id="sectionForm" :form="parameters" @listen:event="eventFormLogin"></section-form>
    </div>
</template>

<script>
import axios from "axios";
import SectionForm from "@/components/SectionForm"

export default {
    name: 'ECSRespondent',
    components: {
        SectionForm
    },
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
                        id: "cfn",
                        res: "",
                        name: "",
                        value: ""
                    },
                    {
                        label: "Código ECN",
                        placeholder: "Ingrese se código ECN",
                        type: "text",
                        active: true,
                        id: "ecn",
                        res: "",
                        name: "",
                        value: ""
                    }
                ],
                button: {
                    textButton: "Ingresar",
                    active: true
                },
                note: "¿Los códigos no funcionan?, Llama al  2539184"
            }
        }
    },
    methods:{
        eventFormLogin: function(msg){
            let req = "cfn="+msg.cfn+"&ecn="+msg.ecn;
            /*let headers = { headers: { 'Content-type': 'application/json'}};*/
            /*this.$router.push({path: "/FormRespondent/"+msg.cfn+"/"+msg.ecn, props: true});*/
            axios.post(process.env.ROOT_API + "/user/login/", req).then(response => {/*{state: Boolean, msg: String}*/
                if (response.state == true) {
                    this.$router.push({path: "/FormRespondent/"+msg.cfn+"/"+msg.ecn, props: true});
                }else{
                    alert(response.msg)
                }
            }).catch(err => {
                console.log(err);
                alert("Se produjo un error, vuelve a intentarlo más tarde");
            });
            
        }
    }
}
</script>

<style>
.componentLogin{
    height: 100vh;
    background-image: url("../assets/fondoLogin.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}
#sectionForm .cardSectionForm{
    background-color: #000000d4;
    background-clip: content-box;
}
#sectionForm .cardSectionForm *{
    color: #fff;
}
#sectionForm .cardSectionForm input[type = "text"]{
    color: #000;
}
.cardLogin{
    border: solid 1px #adadad;
    padding-top: 1em;
    padding-bottom: 1em;
}
.totalWidth{
    width: 100%;
}
.componentLogin{
    height: 100vh;
}
</style>
