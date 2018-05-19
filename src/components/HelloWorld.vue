<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/contact">Contact</router-link>
    <router-link :to="{ name: 'produit', params: { id: 0 } }">Seat</router-link>
    <router-link :to="{ name: 'produit', params: { id: 1 } }">Ford</router-link>
    <router-link :to="{ name: 'produit', params: { id: 2 } }">Volvo</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'You need him'
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
  color: #42b983;
}
</style>
