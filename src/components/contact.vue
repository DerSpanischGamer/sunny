<!-- en template il y a la code en html -->
<template>
  <div class="contact">
  </br>  </br>
    <v-jumbotron color="grey lighten-2">
        <router-link to="/">Home</router-link>
        <v-card-side>
        <v-layout>
     <v-flex xs12 sm6 offset-sm3>
       <v-card>
         <v-card-media src="\src\assets\logo.gif" height="100px">
         </v-card-media>
         <v-card-title primary-title>
           <div>
             <h3 class="headline mb-50">Chef d'équipe</h3>
             <div>Roberto truc </div>
           </div>
         </v-card-title>
       </v-card>
     </v-flex>
   </v-layout>
   <v-layout>
<v-flex xs12 sm6 offset-sm3>
  <v-card>
    <v-card-media src="\src\assets\logo.gif" height="200px">
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-4">Chef d'équipe</h3>
        <div>Roberto truc </div>
      </div>
    </v-card-title>
  </v-card>
</v-flex>
</v-layout>
</v-card-side>
      </v-jumbotron>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-style: normal;
  margin-top: 3em;
  color: black;
  margin-left: 10em;
 margin-right: 10em;
 font-weight: bold;
}
h2{
  font-style: normal;
  margin-top: 0em;
  color: black;
  margin-left: 0em;
 margin-right: 40em;
 font-weight: bold;
}

</style>
