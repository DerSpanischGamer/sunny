<template>
  <div class="produit">
    <layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-carousel >
            <v-carousel-item v-for="(item,i) in images" :src="item" :key="i" ></v-carousel-item>
          </v-carousel>
          <v-card-title primary-title >
            <div>
              <h2 class="headline mb-0"> {{ nom }} </h2>
              <div> <h3> {{marque}} </h3> <br> {{ description }} </div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange" :to="origine">Retourner</v-btn>
            <v-btn flat color="orange" :to="{ name: 'acheter', params: { id: id } }">Acheter {{ prix }} CHF</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </layout>
  </div>
</template>

<script>
import router from '../router'
import json from '../voitures.json'

export default {
  name: 'produit',
  data () {
    return {
      id: -1,
      origine: '/idk',
      marque: 'marque',
      nom: 'nom',
      description: 'description',
      image: 'https://www.anipedia.net/imagenes/caracteristicas-generales-de-los-gatos.jpg',
      prix: 1
    }
  },
  created () {
    this.id = this.$route.params.id
    this.origine = this.$route.params.origine

    this.marque = json[this.id].marque
    this.nom = json[this.id].nom
    this.description = json[this.id].description
    this.image = json[this.id].image
    this.prix = json[this.id].prix
  },
  methods: {
    navigate () {
      router.go(-1)
    }
  },
  computed: {
    images () {
      let images = []

      images.push(json[this.id].image)
      images.push(json[this.id].image_2)

      for (let i = 0; i < images.length; i++) {
        console.log(images[i])
      }

      return images
    }
  }
}
</script>

<style scoped>
</style>
