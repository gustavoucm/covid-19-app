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
                  format(data.cases.total, false)
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
                  format(data.deaths.total, false)
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
                  format(data.cases.critical, false)
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
                format(data.cases.new, true)
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
                format(data.deaths.new, true)
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
                format(data.cases.recovered, false)
                }}</p>
                <h2 class="text-center pt-3">Total de recuperados</h2>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!--
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
    </v-row>-->
    <v-row>
      <v-col offset-sm="1" sm="10">
        <p class="text-right">* Información recabada el dia {{currentDate}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset-sm="1" sm="10" class="mb-5">
        <v-card>
          <v-card-text>
            <canvas id="line-chart" width="800" height="450"></canvas>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'countryComponent',
  data () {
    return {
      myChart: null,
      country: '',
      currentDate: '',
      nameURI: '',
      chart: {
        labels: [],
        data: [],
        recovered: [],
        deaths: []
      },
      showCountryInfo: false,
      /*
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
      },*/
      data: {
        country: '',
        cases: {
          new: '',
          active: 0,
          critical: 0,
          recovered: 0,
          total: 0
        },
        deaths: {
          new: '',
          total: 0
        },
        day: '',
        time: ''
      },
      countryInfo: null
    }
  },
  created () {
    this.nameURI = this.$route.params.name
    // this.$store.dispatch('coronavirus/getLastByCountry',{event: {context: this, country: this.nameURI}})
    this.$store.dispatch('coronavirus/getStatistics',{event: {context: this, country: this.nameURI}})
  },
  methods: {
    getDate () {
      let date = new Date(this.data.day)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      this.currentDate = date.toLocaleDateString("es-ES", options)
      this.getCountryInfo()
    },
    getCountryInfo () {
      this.$store.dispatch('coronavirus/getCountryInfo',{event: {context: this, country:this. nameURI}})
      this.$store.dispatch('coronavirus/getHistoryByCountry',{event: {context: this, country:this. nameURI}})
    },
    generateChart () {
      this.myChart = new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: this.chart.labels,
          datasets: [{ 
              data: this.chart.data,
              label: "Confirmados",
              borderColor: "#3e95cd",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Número de casos confirmados en ' + this.countryInfo.translations.es
          }
        }
      })
    },
    format (number, opt) {
      if (number === '' || number === null) {
        return 'En proceso'
      } else {
        if (opt) {
          number = number.substring(1)
          return '+' + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
          return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
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