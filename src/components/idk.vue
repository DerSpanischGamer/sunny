<template>
  <div class="idk">
    <img src="../assets/tenor.gif">
    <router-link to="/">Click for hot stuff</router-link>
  </div>
</template>

<script>
import json from '../voitures.json'

export default {
  name: 'idk',
  data () {
    return {
      selectione: 'false',
      marqueselec: 'Ford'
    }
  },
  computed: {
    voitures () {
      let voitures = json
      return voitures
    },
    marques () {
      let marques = []

      // corregir esto

      for (let i = 0; i < json.length; i++) {
        console.log(json[i].marque)
        marques += json[i].marque
      }
      console.log(this.marques)

      return marques
    }
  }
}
</script>

<style scoped>
</style>
