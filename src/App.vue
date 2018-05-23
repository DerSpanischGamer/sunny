<template>
  <div id="app" class="white">
    <v-toolbar fixed scroll-off-screen class= "blue">
      <v-toolbar-title>Sunny</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/voitures">Voitures</v-btn>
        <v-btn flat to="/contact">Contact</v-btn>
        <v-menu>
          <v-btn slot="activator">Marques</v-btn>
          <v-list subheader>
            <v-list-tile v-for="marque in marques" :key="marque" @click="marqueselec = marque">
              <v-list-tile-title>{{ marque }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
  </div>
</template>

<script>
import json from './voitures.json'

export default {
  name: 'App',
  computed: {
    marques () {
      let marques = []
      for (var i = 0; i < json.length; i++) {
        if (!marques.includes(json[i].marque)) {
          marques.push(json[i].marque)
        }
      }
      return marques
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
    background-color: #111;
}
</style>
