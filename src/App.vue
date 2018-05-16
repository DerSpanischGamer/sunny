<template>
  <div id="app">
      <v-toolbar>
        <v-toolbar-title>Sunny</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Voitures</v-btn>
          <router-link to="/contact"><v-btn flat>Contact</v-btn></router-link>
          <v-btn flat>idk</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <router-view/>
    <v-card>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Chevrolet</div>
                <div>Regarder tous les modèles disponibles.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Plus d'infos</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">Ferrari</div>
                      <div>wtf</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat dark>Plus d'infos</v-btn>
                  </v-card-actions>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="/src/assets/chevolet.jpg"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card color="purple" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">Ford</div>
                      <div>Modèles classiques</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat dark>Plus d'infos</v-btn>
                  </v-card-actions>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="/static/doc-images/cards/halcyon.png"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
    background-color: #111;
}
</style>
