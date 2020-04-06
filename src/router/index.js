import Vue from 'vue'
import Router from 'vue-router'

const HomeComponent = resolve => {
  require.ensure(['../container-components/Home/Home'], () => {
    resolve(require('../container-components/Home/Home'))
  })
}

const GlobalComponent = resolve => {
  require.ensure(['../container-components/Global/Global'], () => {
    resolve(require('../container-components/Global/Global'))
  })
}

const CountryComponent = resolve => {
  require.ensure(['../container-components/Country/Country'], () => {
    resolve(require('../container-components/Country/Country'))
  })
}

const InfoComponent = resolve => {
  require.ensure(['../container-components/Info/Info'], () => {
    resolve(require('../container-components/Info/Info'))
  })
}

function handleNotFound (to, from, next) {
  next('/')
}

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/global',
      name: 'global',
      component: GlobalComponent
    },
    {
      path: '/country/:name',
      name: 'global',
      component: CountryComponent
    },
    {
      path: '/info',
      name: 'info',
      component: InfoComponent
    },
    {
      path: '*',
      beforeEnter: handleNotFound
    }
  ]
})

export default router
