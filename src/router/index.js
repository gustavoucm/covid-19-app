import Vue from 'vue'
import Router from 'vue-router'

const HomeComponent = resolve => {
  require.ensure(['../container-components/Home/Home'], () => {
    resolve(require('../container-components/Home/Home'))
  })
}

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    }
  ]
})

export default router
