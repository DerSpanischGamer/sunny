<template>
  <div class="hello">
    <h1> Ta voiture a l'id: {{ id }}</h1>
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
                msg: 'Hey Nic Raboy'
            }
        },
        created() {
            this.id = this.$route.params.id;
        },
        methods: {
            navigate() {
                router.go(-1);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
