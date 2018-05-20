import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import contact from '@/components/contact'
import voitures from '@/components/voitures'
import produit from '@/components/produit'
import idk from '@/components/idk'
import acheter from '@/components/acheter'

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
      path: '/produit&:id&:origine',
      name: 'produit',
      component: produit
    },
    {
      path: '/idk',
      name: 'idk',
      component: idk
    },
    {
      path: '/acheter&:id',
      name: 'acheter',
      component: acheter
    }
  ]
})
