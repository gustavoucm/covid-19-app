<template>
  <div>
    <LoadingComponent v-if="loading"></LoadingComponent>
    <v-parallax
      dark
      v-if="!loading"
      height="600"
      src="https://restcountries.eu/data/mex.svg"
    >
      <v-row
        align="center"
        justify="center"
        class="parallax-row"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-4 world-panoram mb-4">Panorama en México</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row
      v-if="!loading">
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
    <v-row
      v-if="!loading">
      <v-col offset-sm="1" sm="10">
        <p class="text-right">* Información recabada el día {{currentDate}}</p>
      </v-col>
    </v-row>
    <v-row
      v-if="!loading">
      <v-col offset-sm="1" sm="10" class="mb-5" v-if="showHistory">
        <v-card>
          <v-card-text>
            <h1 class="text-center">Historial</h1>
            <div id="chartA">
              <apexchart type="area" height="350" :options="chartOptionsA" :series="seriesA"></apexchart>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset-sm="1" sm="10" class="mb-5" v-if="showThisChart">
        <v-card>
          <v-card-text>
            <img :src="imgMap" alt="Map">
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset-sm="1" sm="10" class="mb-5" v-if="showThisChart">
        <v-card>
          <v-card-text>
            <img :src="ratioMap" alt="Map">
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset-sm="1" sm="10" class="mb-5" v-if="showThisChart">
        <v-card>
          <v-card-text>
            <div id="chart">
              <h1 class="text-center">Casos por estado</h1>
              <apexchart type="bar" height="750" :options="chartOptions" :series="series"></apexchart>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      v-if="!loading">
      <v-col sm="10" offset-sm="1" width="100%" height="60vh">
        <h2 class="text-center mb-2">Mapa interactivo</h2>
        <iframe
          class="map mb-5"
          src="https://www.google.com/maps/d/embed?mid=1-XnTNpU7R4XiVewJh_nwcpUrtGgd4gwu">
        </iframe>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'MexicoComponent',
  data () {
    return {
      currentDate: '',
      loading: false,
      imgMap: '',
      ratioMap: '',
      showThisChart: false,
      showHistory: false,
      dataSeries: [],
      seriesA: [
        {
          name: 'Confirmados',
          data: this.dataSeries
        },
        {
          name: 'Defunciones',
          data: this.dataSeries
        }
      ],
      chartOptionsA: {
        chart: {
          type: 'area',
          height: 350,
          stacked: true,
          events: {
            selection: function (chart, e) {
              // eslint-disable-next-line
              console.log(new Date(e.xaxis.min))
            }
          },
          defaultLocale: 'es',
          locales: [{
            name: 'es',
            options: {
              months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
              shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
              days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              toolbar: {
                download: 'Descargar SVG',
                selection: 'Selección',
                selectionZoom: 'Selección Zoom',
                zoomIn: 'Acercar',
                zoomOut: 'Alejar',
                pan: 'Mover',
                reset: 'Reset Zoom',
              }
            }
          }]
        },
        // colors: ['#008FFB', '#00E396', '#CED4DC'],
        colors: ['#e74c3c', '#00E396', '#008FFB'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left'
        },
        xaxis: {
          type: 'datetime'
        }
      },
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        },
        tooltip: {
          theme: 'dark',
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return ''
              }
            }
          }
        }
      },
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
      }
    }
  },
  created () {
    this.$store.dispatch('coronavirus/getStatistics',{event: {context: this, country: 'Mexico'}})
    this.$store.dispatch('coronavirus/getMexStatistics',
          {
            event: {
              context: this
            }
          }
     )
  },
  methods: {
    showChart () {
      this.seriesA = this.dataSeries
      this.showHistory = true
    },
    getDate () {
      let date = new Date(this.data.day)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      this.currentDate = date.toLocaleDateString("es-ES", options)
      this.$store.dispatch('coronavirus/getHistoryByCountry',{event: {context: this, country: 'Mexico'}})
      this.loading = false
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
  .parallax-row {
    background-color: rgba(0,0,0,0.6) !important;
  }
  .world-panoram {
    font-size: 4rem !important;
  }
</style>