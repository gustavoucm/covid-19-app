<template>
  <div>
    <LoadingComponent v-if="loading"></LoadingComponent>
    <v-parallax
       v-if="!loading"
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
    <v-row class="mt-5"
       v-if="!loading">
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
    <v-row>
      <v-col offset-sm="1" sm="10" class="mb-5" v-if="showHistory">
        <v-card>
          <v-card-text>
            <h1 class="text-center mt-3 mb-5 title">Historial</h1>
            <div id="chartA">
              <apexchart type="area" height="350" :options="chartOptionsA" :series="seriesA"></apexchart>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-5 mb-5"
       v-if="!loading">
      <v-col sm="10" offset-sm="1">
        <v-data-table
          :headers="headers"
          :items="data"
          :search="search"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>
                <h1 class="text-center title chart-title">Casos por países</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-text-field v-model="search" label="Buscar país" class="mx-4"></v-text-field>
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
    <v-row
       v-if="!loading">
      <v-col sm="10" offset-sm="1" width="100%" height="60vh">
        <h2 class="text-center mb-2 title">Mapa interactivo</h2>
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
      dataSeries: [],
      loading: true,
      showHistory : false,
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
      ],
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
      }
    }
  },
  created () {
    this.$store.dispatch('coronavirus/getByCountry', {event: {context: this}})
    this.$store.dispatch('coronavirus/getWorldStatus', {event: {context: this}})
    this.$store.dispatch('coronavirus/getSumarySpots', {event: {context: this}})
  },
  methods: {
    showChart () {
      this.seriesA = this.dataSeries
      this.showHistory = true
    },
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
    font-size: 4rem !important;
  }
  .title {
    font-size: 2rem !important;
    color: black;
    width: 100% !important;
    display: block;
  }
  .chart-title {
    position: absolute;
  }
</style>