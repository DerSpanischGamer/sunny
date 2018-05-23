<template>
  <div class="produit">
    <h1> Cette voiture est un {{ marque }} {{ nom }} {{ description }}</h1>
    <img :src="image" height="400">
    <br>
    <v-btn dark="true" :to="origine">Retouner</v-btn>
    <v-btn dark="true" :to="{ name: 'acheter', params: { id: id } }">Acheter</v-btn>
    <br>
      <v-flex> <!-- Cette partie s'execute si le client cherche une marque -->
        <v-card v-for="voiture in voitures" v-if="voiture.marque == marqueselec" :key="voiture.id">
          <v-card-media :src="voiture.image" height="200" ></v-card-media>
          <v-card-title primary-title >
            <div>
              <h2 class="headline mb-0"> {{ voiture.nom }} </h2>
              <div> <h3> {{voiture.marque}} </h3> <br> {{ voiture.description }} </div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange" :to="{ name: 'produit', params: { id: voiture.id, origine: '/voitures' } }">Regarder</v-btn>
            <v-btn flat color="orange" :to="{ name: 'acheter', params: { id: voiture.id } }">Acheter</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    <h2>Ici il faudra changer ça pour un v-card</h2>
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
      origine: '/idk',
      marque: 'marque',
      nom: 'nom',
      description: 'description',
      image: 'https://www.anipedia.net/imagenes/caracteristicas-generales-de-los-gatos.jpg'
    }
  },
  created () {
    this.id = this.$route.params.id
    this.origine = this.$route.params.origine

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

<style scoped>
</style>
