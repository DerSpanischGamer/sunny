<template>
  <div class="produit">
    <h1> La voiture numéro {{ id }} es: {{ msg }}</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'produit',
  data () {
    return {
      id: 0,
      msg: ''
    }
  },
  created () {
    this.id = this.$route.params.id
    this.msg = voit[this.id]
  },
  methods: {
    navigate () {
      router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
