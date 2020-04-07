<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
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
        to="/global"
        text
      >
        <span class="mr-2">Global</span>
      </v-btn>
      <v-btn
        to="/info"
        text
      >
        <span class="mr-2">Informate</span>
      </v-btn>
      <v-btn
        to="/contact"
        text
      >
        <span class="mr-2">Contacto</span>
      </v-btn>
    </v-app-bar>

    <v-content class="main-background">
      <router-view></router-view>
    </v-content>
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

  data: () => ({
    //
  }),
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
</style>
