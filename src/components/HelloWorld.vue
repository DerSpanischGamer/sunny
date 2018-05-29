<template>
  <div class="hello">
    <h1>{{ msg }}</h1> <br>
    <v-carousel >
      <v-carousel-item v-for="(image, i) in voitures" :src="image.image" :key="i" :to="{ name: 'produit', params: { id: image.id, origine: '/' } }"></v-carousel-item>
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
  },
  computed: {
    voitures () {
      let chifres = []
      let voitures = []

      let max = 4

      function choisirChifre () {
        let ran = Math.random(0, json.length)

        function toutbien (ran) {
          let temp = true
          for (let j = 0; j < chifres.length; j++) {
            if (ran === chifres[j]) {
              temp = false
            }
            return temp
          }
        }

        if (toutbien(ran)) {
          chifres.push(ran)
        } else {
          choisirChifre ()
        }
      }

      for (let i = 0; i < max; i++) {
        choisirChifre()
      }

      for (let i = 0; i < chifres.length; i++) {
        voitures.push(json[chifres[i]])
        console.log(voitures[i].nom)
      }

      return voitures
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
