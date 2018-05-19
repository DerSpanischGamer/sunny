<template>
  <div class="produit">
    <h1> Cette voiture est un {{ marque }} {{ nom }} {{ description }}</h1>
    <br>
    <img :src="image" height="400">
    <br>
    <h2>Ici il faudra changer ça pour un v-card</h2>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import router from '../router'
import json from '../voitures.json'

export default {
  name: 'produit',
  data () {
    return {
      id: -1,
      marque: 'marque',
      nom: 'nom',
      description: 'description',
      image: 'https://www.anipedia.net/imagenes/caracteristicas-generales-de-los-gatos.jpg'
    }
  },
  created () {
    this.id = this.$route.params.id
    this.marque = json[this.id].marque
    this.nom = json[this.id].nom
    this.description = json[this.id].description
    this.image = json[this.id].image
  },
  methods: {
    navigate () {
      router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
