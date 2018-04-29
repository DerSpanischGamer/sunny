<template>
  <div id="app">
	<ul>
		<li><a href="#/">Home</a></li>
		<li><a href="#/voitures">Voitures</a></li>
		<li><a href="#/contact">Contact</a></li>
		<li><a href="#/about">About</a></li>
	</ul>
	<img src="./assets/logo.gif">
    <img src="./assets/logo.png">
	<img src="./assets/tenor.gif">
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
