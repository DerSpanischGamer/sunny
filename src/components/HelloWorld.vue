<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/contact">
      <v-btn color="blue-grey lighten-4">contact</v-btn>
    </router-link>
    <router-link :to="{ name: 'produit', params: { id: 0 } }">
      <v-btn color="blue-grey lighten-4">seat</v-btn>
</router-link>
    <router-link :to="{ name: 'produit', params: { id: 1 } }">
        <v-btn color="blue-grey lighten-4">ford</v-btn>
</router-link>
    <router-link :to="{ name: 'produit', params: { id: 2 } }">
      <v-btn color="blue-grey lighten-4">volvo</v-btn>
</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Sunny'
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
