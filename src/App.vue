<template>
  <div id="app">
<<<<<<< HEAD
    <v-toolbar>
      <v-toolbar-title>Sunny</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Voitures</v-btn>
        <router-link to="/contact"><v-btn flat>Contact</v-btn></router-link>
        <v-btn flat>idk</v-btn>
      </v-toolbar-items>
    </v-toolbar>
=======
	<v-toolbar>
		<v-toolbar-side-icon></v-toolbar-side-icon>
		<v-toolbar-title>Title</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn flat>Link One</v-btn>
			<v-btn flat>Link Two</v-btn>
			<v-btn flat>Link Three</v-btn>
		</v-toolbar-items>
	</v-toolbar>
>>>>>>> dd622920f759568fa0407b0eac2477f81da1a847
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
