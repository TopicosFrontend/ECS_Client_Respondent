<template>
    <div class="componentLogin d-flex justify-content-center align-items-center">
        <section-form></section-form>
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
        }
    }
}
/*let req = {cfn: this.inputs[0].res, ecn: this.inputs[1].res}
            axios
            .get(process.env.ROOT_API + this.endPoint/)
                .then(response => {
                    
                });
            });*/
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
.componentLogin{
    height: 100vh;
}
</style>
