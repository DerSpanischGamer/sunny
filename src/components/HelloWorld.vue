<template>
  <div class="hello">
    <h1>{{ msg }}</h1> <br>
    <h2>Bienvenue au Sunny! Le site de vente de voiture le plus spécialisé d'internet. <br><img src="../assets/car.png" height="100"> Ici vous trouverez en un clignotement d'oeil la voiture de vos rêves.</h2>
    <br> <br>
    <v-carousel>
      <v-carousel-item v-for="(image, i) in items" :src="image.image" :key="i" :to="{ name: 'produit', params: { id: image.id, origine: '/' } }"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import json from '../voitures.json'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Sunny',
      items: json
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: Arial;
  height: 500

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0D47A1;
}
</style>
