<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <v-app-bar-nav-icon
        v-if="!show"
        @click="drawer = !drawer">
        </v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <router-link
          style="display: inline-flex"
          to="/"
          >
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./assets/img/virus.svg"
            transition="scale-transition"
            width="40"
          />
          <h3 class="shrink mt-1 hidden-sm-and-down">
            COVID-19 MX
          </h3>
        </router-link>
      </div>

      <v-spacer></v-spacer>
      <v-btn
        v-if="show"
        to="/mexico"
        text
      >
        <span class="mr-2">México</span>
      </v-btn>
      <v-btn
        v-if="show"
        to="/global"
        text
      >
        <span class="mr-2">Global</span>
      </v-btn>
      <v-btn
        v-if="show"
        to="/contact"
        text
      >
        <span class="mr-2">Contacto</span>
      </v-btn>
    </v-app-bar>

    <v-content class="main-background">
      <router-view></router-view>
    </v-content>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./assets/img/virus.svg"
            transition="scale-transition"
            width="40"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            <h3 class="shrink mt-1 black--text">
              COVID-19 MX
            </h3>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
         <v-list-item link to="/">
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/mexico">
          <v-list-item-content>
            <v-list-item-title>Mexico</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-list-item link to="/global">
          <v-list-item-content>
            <v-list-item-title>Global</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/contact">
          <v-list-item-content>
            <v-list-item-title>Contacto</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
       <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>COVID-19 MX</strong>
      </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
   return {
      drawer: false,
      screenWidth: 0,
      show: true
   }
  },
  created () {
    this.screenWidth = screen.width
    this.show = screen.width < 600 ? false : true
    window.addEventListener('resize', () => {
      this.screenWidth = screen.width
      this.show = screen.width < 600 ? false : true
    })
  }
};
</script>

<style>
  * {
    font-family: 'Roboto';
  }
  .main-background {
    background-color: #F8F7FF;
  }
  .shrink {
    text-decoration: none;
    color: white;
  }
  html {
    width: 100vw;
  }
  .v-navigation-drawer {
    height: 100vh !important;
    position: fixed !important;
  }
</style>
