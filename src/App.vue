<template>
  <div id="app">
    <v-toolbar>
      <v-toolbar-title>Sunny</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Voitures</v-btn>
        <router-link to="/contact"><v-btn flat>Contact</v-btn></router-link>
        <v-btn flat>idk</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
