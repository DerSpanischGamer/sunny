<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-carousel>
      <v-carousel-item v-for="(image ,i) in images" :src="image.image" :key="i" :to="{ name: 'produit', params: { id: image.id, origine: '/' } }"></v-carousel-item>
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
      images: json
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
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
