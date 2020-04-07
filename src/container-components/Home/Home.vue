<template>
  <div>
    <v-parallax
      dark
      height="600"
      src="../../assets/img/background.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-4 mb-4">COVID-19</h1>
          <h4 class="display-2">México</h4>
        </v-col>
      </v-row>
    </v-parallax>
    <h1 class="text-center mt-5 mb-5 ml-2 mr-2">Panorama actual en México</h1>
    <v-row>
      <v-col xs="12">
      <img
        src="../../assets/img/mexico.svg"
        alt=""
        width="180"
        class="d-flex justify-center mex">
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
                <p class="text-center number">{{data.latest_stat_by_country[0].total_cases}}</p>
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
                <p class="text-center number">{{data.latest_stat_by_country[0].total_deaths}}</p>
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
                <p class="text-center number">{{data.latest_stat_by_country[0].serious_critical}}</p>
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
                <p class="text-center number">+{{data.latest_stat_by_country[0].new_cases}}</p>
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
                <p class="text-center number">+{{
                  data.latest_stat_by_country[0].new_deaths === '' ? '-' : data.latest_stat_by_country[0].new_deaths
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
                <p class="text-center number">{{data.latest_stat_by_country[0].total_cases_per1m}}</p>
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
    <v-row>
      <v-col offset-sm="1" sm="10" class="mb-5">
        <v-card>
          <v-card-text>
            <div class="wrapper">
              <canvas id="line-chart" width="800" height="450"></canvas>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" width="100%" height="60vh">
        <iframe
          class="map mb-5"
          src="https://www.google.com/maps/d/embed?mid=1-XnTNpU7R4XiVewJh_nwcpUrtGgd4gwu">
        </iframe>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'HomeComponent',
  data () {
    return {
      currentDate: '',
      screenWidth: 0,
      labelAvailable: true,
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
      chart: {
        labels: [],
        data: [],
        recovered: [],
        deaths: []
      }
    }
  },
  created() {
    this.screenWidth = screen.width
    this.labelAvailable = screen.width < 600 ? false : true
    window.addEventListener('resize', () => {
      this.screenWidth = screen.width
      this.labelAvailable = screen.width < 600 ? false : true
      this.generateChart()
    })
    this.$store.dispatch('coronavirus/getLastByCountry',{event: {context: this, country: 'Mexico'}})
  },
  methods: {
    getDate () {
      let date = new Date(this.data.latest_stat_by_country[0].record_date)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      this.currentDate = date.toLocaleDateString("es-ES", options)
      this.$store.dispatch('coronavirus/getHistoryByCountry',{event: {context: this, country: 'Mexico'}})
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
            text: 'Número de casos confirmados en México'
          },
          scales: {
            xAxes: [{
                ticks: {
                    display: this.labelAvailable
                }
            }]
          }
        }
      })
    }
  }
}
</script>

<style scoped>
  .number {
    font-size: 50px;
    color: #e74c3c;
    font-weight: 700;
    line-height: 38px;
  }
  .mex {
    margin: 0 auto;
  }
  .map {
    width: 100%;
    height: 80vh;
  }
</style>