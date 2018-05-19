<template>
  <div class="idk">
    <v-btn flat v-for="voiture in voitures" :key="voiture.id"> {{ voiture.nom }}</v-btn>
    <br>
    <router-link to="/">Click for hot stuff</router-link>
  </div>
</template>

<script>
import json from '../voitures.json'

export default {
  name: 'idk',
  computed: {
    voitures () {
      let voitures = json
      return voitures
    }
  }
}
</script>

<style scoped>
</style>
