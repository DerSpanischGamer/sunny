<template>
  <div class="idk">
    <img src="../assets/tenor.gif">
    <v-menu offset-y>
      <v-btn slot="activator" color="primary" dark>Dropdown</v-btn>
      <v-list>
        <v-list-tile v-for="marque in marques" :key="marque" @click="marqueselec = marque">
          <v-list-tile-title>{{ marques.marque }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <router-link to="/">Click for hot stuff</router-link>
  </div>
</template>

<script>
import json from '../voitures.json'

for (let i = 0; i < json.length; i++) {
  console.log(json[i].marque)
}

export default {
  name: 'idk',
  data () {
    return {
      selectione: 'false',
      marqueselec: 'Ford'
    }
  },
  created () {
    console.log('kjfvijhb')
  },
  computed: {
    voitures () {
      let voitures = json
      return voitures
    },
    marques () {
      var marques = []

      // corregir esto

      return marques
    }
  },
  methods: {
    lireMarque (i) {
      return this.marques[i]
    }
  }
}
</script>

<style scoped>
</style>
