<!-- en template il y a la code en html -->
<template>
  <div class="contact">
  <br><br>
  <router-link to="/">Home</router-link>
  <h1> CONTACTS</h1><br>
  <v-layout row wrap>
   <v-flex xs12 sm4 offset-sm1>
     <v-card>
       <v-card-media height="200px">
       </v-card-media>
       <v-card-title primary-title>
         <div>
           <h3 class="headline mb-0">Roberto G. Cobeta</h3>
           <div>Chef d'équipe</div>
         </div>
       </v-card-title>
     </v-card>
   </v-flex>
     <v-flex xs12 sm4 offset-sm2>
     <v-card>
       <v-card-media src="src/assets/nico.jpg" height="200px">
       </v-card-media>
       <v-card-title primary-title>
         <div>
           <h3 class="headline mb-0">Nicoly Santos</h3>
           <div>Assistant général</div>
         </div>
       </v-card-title>
     </v-card>
   </v-flex>
 </v-layout>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-style: normal;
  margin-top: 1.5em;
  color: blue;
 font-weight: bold;
}

</style>
