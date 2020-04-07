<template>
  <div>
    <v-parallax
      dark
      height="600"
      src="../../assets/img/earth.jpg"
    >
      <v-row
        class="parallax-row"
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-4 world-panoram mb-4">Panorama Mundial</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row class="mt-5">
      <v-col class="mb-5" md="4" sm="6">
        <v-card
          class="d-flex align-content-center flex-wrap mx-auto"
          width="200"
          height="200">
          <v-card-text>
            <p class="text-center number">{{worldStat.total_cases}}</p>
            <h2 class="text-center">Casos confirmados</h2>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="mb-5" md="4" sm="6">
        <v-card
          class="d-flex align-content-center flex-wrap mx-auto"
          width="200"
          height="200">
          <v-card-text>
            <p class="text-center number">{{worldStat.total_deaths}}</p>
            <h2 class="text-center">Defunciones</h2>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="mb-5" md="4" sm="6">
        <v-card
          class="d-flex align-content-center flex-wrap mx-auto"
          width="200"
          height="200">
          <v-card-text>
            <p class="text-center number">{{worldStat.total_recovered}}</p>
            <h2 class="text-center">Casos recuperados</h2>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-5 mb-5">
      <v-col sm="10" offset-sm="1">
        <v-data-table
          :headers="headers"
          :items="data"
          :search="search"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-text-field v-model="search" label="Buscar" class="mx-4"></v-text-field>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="viewInfo(item)"
            >
              mdi-eye
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" width="100%" height="60vh">
        <iframe
          class="map mb-5"
          src="https://www.google.com/maps/d/embed?mid=1S0vCi3BA-7DOCS13MomK7KebkPsvYl8C">
        </iframe>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'globalComponent',
  data () {
    return {
      data: [],
      search: '',
      worldStat: {
        total_cases: '',
        total_deaths:'',
        total_recovered: '',
        new_cases: '',
        new_deaths: '',
        statistic_taken_at: '',
      },
      pagination: {
        descending: true,
        page: 1,
        orderBy: 'country_name',
        sortBy: 'country_name',
        rowsPerPage: 10, // -1 for All",
        totalItems: 10
      },
      headers: [
        {
          text: 'Pais',
          align: 'start',
          value: 'country_name',
        },
        { text: 'Casos', value: 'cases' },
        
        { text: 'Muertes', value: 'deaths' },
        { text: 'Acciones', value: 'actions', sortable: false }
      ]
    }
  },
  created () {
    this.$store.dispatch('coronavirus/getByCountry', {event: {context: this}})
    this.$store.dispatch('coronavirus/getWorldStatus', {event: {context: this}})
  },
  methods: {
    viewInfo (info) {
      this.$router.push('/country/'+ encodeURI(info.country_name))
    },
    changeSort (header) {
      if (this.pagination.sortBy === header) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.descending = false
      }
      this.pagination.sortBy = header
    }
  }
}
</script>

<style scoped>
  .number {
    font-size: 45px;
    color: #e74c3c;
    font-weight: 700;
    line-height: 38px;
  }
  .map {
    width: 100%;
    height: 80vh;
  }
  .parallax-row {
    background-color: rgba(0,0,0,0.4) !important;
  }
  .world-panoram {
    font-size: 5rem !important;
  }
</style>