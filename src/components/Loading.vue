<template>
  <div
    class="overlay d-flex align-center loader">
    <v-row>
      <v-col sm="12" class="text-center">
        <v-col sm="12">
        <!-- <p class="loading">Cargando</p> -->
      </v-col>
        <v-progress-circular
          :size="70"
          color="white"
          indeterminate>
        </v-progress-circular>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent'
}
</script>

<style scoped>
  .loader {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
  }
  .loading {
    font-size: 35px;
    display: block;
    color: white;
    text-align: center;
  }
</style>