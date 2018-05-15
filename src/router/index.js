import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import contact from '@/components/contact'
import voitures from '@/components/voitures'
import produit from '@/components/produit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/voitures',
      name: 'voitures',
      component: voitures
    },
    {
      path: '/produit&:id',
      name: 'produit',
      component: produit
    }
  ]
})
