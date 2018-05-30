<template>
  <div class="contact">
    <br>    <br>
    <h1>Tu veux acheter un {{ marque }} {{ nom }} pour {{ prix }} francs.</h1>
    <v-btn flat @click="$router.go(-1)">Retourner</v-btn>
    <layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
       <v-card-actions>
         <v-select :items="items" v-model="size" label="Size"></v-select>
         <v-spacer></v-spacer>
       </v-card-actions>
        <v-card-media :src="image" height="500" ></v-card-media>
          <v-card-title primary-title >
            <div>
              <h2 class="headline mb-0"> {{ nom }} </h2>
              <div> <h3> {{marque}} </h3> <br> {{ description }} <br> {{ achat }} </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </layout>
  </div>
</template>

<script>
import router from '../router'
import json from '../voitures.json'

export default {
  name: 'acheter',
  data () {
    return {
      id: -1,
      origine: '/idk',
      marque: 'marque',
      nom: 'nom',
      description: 'description',
      image: 'https://www.anipedia.net/imagenes/caracteristicas-generales-de-los-gatos.jpg',
      prix: '-1'
    }
  },
  created () {
    this.id = this.$route.params.id
    this.origine = this.$route.params.origine

    this.marque = json[this.id].marque
    this.nom = json[this.id].nom
    this.description = json[this.id].description
    this.prix = json[this.id].prix
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
