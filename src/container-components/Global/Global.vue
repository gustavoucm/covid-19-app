<template>
  <div>
    <v-row>
      <v-col offset-sm="1" sm="10">
        <h1 class="text-center mt-5 mb-5 ml-2 mr-2">Panorama Mundial</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mb-5" md="4" sm="6">
        <v-card
          class="d-flex align-content-center flex-wrap mx-auto"
          width="200"
          height="200">
          <v-card-text>
            <p class="text-center number">{{worldStat.total_cases}}</p>
            <h2 class="text-center pt-3">Casos confirmados</h2>
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
            <h2 class="text-center pt-3">Defunciones</h2>
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
            <h2 class="text-center pt-3">Casos recuperados</h2>
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
        mdi-pencil
      </v-icon>
          </template>
        </v-data-table>
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
      headers: [
        {
          text: 'Pais',
          align: 'start',
          value: 'country_name',
        },
        { text: 'Casos', value: 'cases' },
        
        { text: 'Muertes', value: 'deaths' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  created () {
    this.$store.dispatch('coronavirus/getByCountry', {event: {context: this}})
    this.$store.dispatch('coronavirus/getWorldStatus', {event: {context: this}})
  },
  methods: {
    viewInfo (info) {
      console.log(info)
    }
  }
}
</script>

<style scoped>
  .number {
    font-size: 45px;
    color: #e74c3c;
    font-weight: 700;
  }
</style>