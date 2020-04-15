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

const ContactComponent = resolve => {
  require.ensure(['../container-components/Contact/Contact'], () => {
    resolve(require('../container-components/Contact/Contact'))
  })
}

const AddCasesComponent = resolve => {
  require.ensure(['../container-components/Admin/AddCases'], () => {
    resolve(require('../container-components/Admin/AddCases'))
  })
}

const MexicoComponent = resolve => {
  require.ensure(['../container-components/Mexico/Mexico'], () => {
    resolve(require('../container-components/Mexico/Mexico'))
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
      path: '/contact',
      name: 'contact',
      component: ContactComponent
    },
    {
      path: '/addReport',
      name: 'addCases',
      component: AddCasesComponent
    },
    {
      path: '/mexico',
      name: 'mexico',
      component: MexicoComponent
    },
    {
      path: '*',
      beforeEnter: handleNotFound
    }
  ]
})

export default router
