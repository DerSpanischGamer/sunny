<template>
  <div class="idk">
    <br>
    <br>
    <v-menu fixed>
      <v-btn offset-x slot="activator">Marques</v-btn>
      <v-list left="0px">
        <v-list-tile v-for="marque in marques" :key="marque" @click="marqueselec = marque">
          <v-list-tile-title>{{ marque }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import json from '../voitures.json'

export default {
  name: 'voitures',
  data () {
    return {
      selectione: 'false',
      marqueselec: 'null'
    }
  },
  computed: {
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
  }
}
</script>

<style>
div.menu__content.menuable__content__active {
  min-width: 101px;
  top: 64px;
  left: 0px;
  transform-origin: left top 0px;
  z-index: 8;
}
</style>
