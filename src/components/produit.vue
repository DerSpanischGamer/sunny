<template>
  <div class="produit">
    <layout>
      <v-flex xs12 sm6 offset-sm3> <!-- Cette partie s'execute si le client cherche une marque -->
        <v-card>
          <v-card-media :src="image" height="500" ></v-card-media>
          <v-card-title primary-title >
            <div>
              <h2 class="headline mb-0"> {{ nom }} </h2>
              <div> <h3> {{marque}} </h3> <br> {{ description }} </div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange" :to="{ name: 'produit', params: { id: id, origine: '/voitures' } }">Regarder</v-btn>
            <v-btn flat color="orange" :to="{ name: 'acheter', params: { id: id } }">Acheter</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </layout>
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
