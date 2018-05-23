<template>
  <div class="voitures">
    <br>
    <br>
    <br>
    <v-navigation-drawer permanent fixed>
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">Trier par marque</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-radio-group>
          <v-radio v-model="checked" label='Toutes les voitures' @click="vraiselectione(false)"></v-radio>
          <v-radio v-for= "n in marques" :key="n" :label="n" :value="n" @click="handler(true, n)">
          </v-radio>
        </v-radio-group>
      </v-navigation-drawer>
    <layout>
      <v-flex xs12 sm6 offset-sm3 v-if="selectione"> <!-- Cette partie s'execute si le client cherche une marque -->
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
      <v-flex xs12 sm6 offset-sm3 v-if="!selectione"> <!-- Cette partie s'execute si le client veut voir toutes les voitures -->
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
      selectione: false,
      marqueselec: 'null',
      radioGroup: 1
    }
  },
  created () {
    console.log('log')
  },
  computed: {
    voitures () {
      let voitures = json
      return voitures
    },
    marques () {
      let marques = []
      console.log('asdf')
      for (var i = 0; i < json.length; i++) {
        if (!marques.includes(json[i].marque)) {
          marques.push(json[i].marque)
        }
      }
      console.log(marques)
      return marques
    }
  },
  methods: {
    vraiselectione: function (arg) {
      this.$data.selectione = arg
    },
    voitureselectione: function (arg) {
      this.$data.marqueselec = arg
    },
    handler: function (arg1, arg2) {
      console.log('je t aime')
      console.log(arg1 + ' ' + arg2)
      this.vraiselectione(arg1)
      this.voitureselectione(arg2)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
