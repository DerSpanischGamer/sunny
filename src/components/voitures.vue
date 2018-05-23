<template>
  <div class="voitures">
    <br>
    <br>
    <br>
    <v-layout>
    <v-container fluid px-0>
      <v-flex xs6>
        <v-radio-group  v-model="radio">
          <v-radio v-for= "n in 3" :key="n" :label="'Hola'" :value="n">
          </v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs6>
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </v-layout>
    <layout>
      <v-flex xs12 sm6 offset-sm3 v-if="selectione === 'true'"> <!-- Cette partie s'execute si le client cherche une marque -->
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
      <v-flex xs12 sm6 offset-sm3 v-if="selectione === 'false'"> <!-- Cette partie s'execute si le client veut voir toutes les voitures -->
        <v-card v-for="voiture in voitures" :key="voiture.id">
          <v-card-media :src="voiture.image" height="200"></v-card-media>
          <v-card-title primary-title>
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
    </layout>
    <br>
    <router-link to="/">Click for hot stuff</router-link>
  </div>
</template>

<script>
import json from '../voitures.json'

export default {
  name: 'voitures',
  data () {
    return {
      selectione: 'false',
      marqueselec: 'Ford'
    }
  },
  created () {
    console.log('log')
    this.hola()
  },
  computed: {
    voitures () {
      let voitures = json
      return voitures
    }
  },
  methods: {
    hola () {
      console.log('hola')
      for (var i = 0; i < json.length; i++) {
        console.log(json[i].marque)
      }
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
