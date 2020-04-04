<template>
  <div>
    <v-row
      v-if="showCountryInfo">
      <v-col
        md="10"
        class="text-center"
        offset-md="1">
        <h1>{{countryInfo.translations.es}}</h1>
        <img
          :src="countryInfo.flag"
           width="350"
          :alt="countryInfo.translations.es + ' flag'"
          class="d-flex justify-center mex flag mt-3">
      </v-col>
    </v-row>
    <v-row>
      <v-col offset-md="1" md="10">
        <v-row>
          <v-col class="mb-5" md="4" sm="6">
            <v-card
              class="d-flex align-content-center flex-wrap mx-auto"
              width="200"
              height="200">
              <v-card-text>
                <p class="text-center number">{{
                  data.latest_stat_by_country[0].total_cases  === '' ? 'En proceso': data.latest_stat_by_country[0].total_cases
                }}</p>
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
                <p class="text-center number">{{
                  data.latest_stat_by_country[0].total_deaths === '' ? 'En proceso': data.latest_stat_by_country[0].total_deaths
                }}</p>
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
                <p class="text-center number">{{
                  data.latest_stat_by_country[0].serious_critical === '' ? 'En proceso' : data.latest_stat_by_country[0].serious_critical
                }}</p>
                <h2 class="text-center">Casos criticos</h2>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="mb-5" md="4" sm="6">
            <v-card
              class="d-flex align-content-center flex-wrap mx-auto"
              width="200"
              height="200">
              <v-card-text>
                <p class="text-center number">{{
                  data.latest_stat_by_country[0].new_cases  === '' ? 'En proceso' :data.latest_stat_by_country[0].new_cases
                }}</p>
                <h2 class="text-center">Nuevos casos</h2>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="mb-5" md="4" sm="6">
            <v-card
              class="d-flex align-content-center flex-wrap mx-auto"
              width="200"
              height="200">
              <v-card-text>
                <p class="text-center number">{{
                  data.latest_stat_by_country[0].new_deaths === '' ? 'En proceso' : data.latest_stat_by_country[0].new_deaths
                }}</p>
                <h2 class="text-center">Nuevas defunciones</h2>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="mb-5" md="4" sm="6">
            <v-card
              class="d-flex align-content-center flex-wrap mx-auto"
              width="200"
              height="200">
              <v-card-text>
                <p class="text-center number">{{
                  data.latest_stat_by_country[0].total_cases_per1m  === '' ? 'En proceso' : data.latest_stat_by_country[0].total_cases_per1m
                }}</p>
                <h2 class="text-center pt-3">Casos por cada millón de habitantes</h2>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset-sm="1" sm="10">
        <p class="text-right">* Información recabada el día {{currentDate}}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'countryComponent',
  data () {
    return {
      country: '',
      currentDate: '',
      nameURI: '',
      showCountryInfo: false,
      data: {
        country: '',
        latest_stat_by_country: [
          {
            id: '',
            country_name: '',
            total_cases: '-',
            new_cases: '-',
            active_cases: '-',
            total_deaths: '-',
            new_deaths: '-',
            total_recovered: '-',
            serious_critical: '-',
            region: null,
            total_cases_per1m: '-',
            record_date: ''
          }
        ]
      },
      countryInfo: null,
    }
  },
  created () {
    this.nameURI = this.$route.params.name
    this.$store.dispatch('coronavirus/getLastByCountry',{event: {context: this, country: this.nameURI}})
  },
  methods: {
    getDate () {
      let date = new Date(this.data.latest_stat_by_country[0].record_date)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      this.currentDate = date.toLocaleDateString("es-ES", options)
      this.getCountryInfo()
    },
    getCountryInfo () {
      this.$store.dispatch('coronavirus/getCountryInfo',{event: {context: this, country:this. nameURI}})
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
  .flag {
    margin: 0 auto;
  }
</style>