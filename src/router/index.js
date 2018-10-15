import Vue from 'vue'
import Router from 'vue-router'
import ECSRespondent from '@/pages/EcsRespondent'
import FormRespondent from '@/pages/FormRespondent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ECSRespondent',
      component: ECSRespondent
    },
    {
      path: '/FormRespondent',
      name: 'FormRespondent',
      component: FormRespondent
    }
  ]
})
