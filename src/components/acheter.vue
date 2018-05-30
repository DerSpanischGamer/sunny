<template>
  <div class="contact">
    <br>    <br><br><br><br>
    <h1>Tu veux acheter un {{ marque }} {{ nom }} pour {{ prix }} ?</h1>
    <v-btn flat @click="$router.go(-1)">Retourner</v-btn>
    <layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-carousel>
              <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
            </v-carousel>
          <v-card-title primary-title >
            <div>
              <h2 class="headline mb-0"> {{ nom }} </h2>
              <div> <h3> {{marque}} </h3> <br> {{ description }} <br> {{ achat }} </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </layout>
  </div>
</template>

<script>
import router from '../router'
import json from '../voitures.json'

export default {
  name: 'acheter',
  data () {
    return {
      id: -1,
      origine: '/idk',
      marque: 'marque',
      nom: 'nom',
      description: 'description',
      image: 'https://www.anipedia.net/imagenes/caracteristicas-generales-de-los-gatos.jpg',
      prix: '-1'
    }
  },
  created () {
    this.id = this.$route.params.id
    this.origine = this.$route.params.origine

    this.marque = json[this.id].marque
    this.nom = json[this.id].nom
    this.description = json[this.id].description
    this.prix = json[this.id].prix
  },
  methods: {
    navigate () {
      router.go(-1)
    }
  }
}
</script>

<style scoped>
</style>
