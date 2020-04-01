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
      <img src="../../assets/img/mexico.svg" alt="" width="180" class="d-flex justify-center mex">
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
                <h2 class="text-center pt-3">Casos criticos</h2>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="mb-5" md="4" sm="6">
            <v-card
              class="d-flex align-content-center flex-wrap mx-auto"
              width="200"
              height="200">
              <v-card-text>
                <p class="text-center number">{{data.latest_stat_by_country[0].new_cases}}</p>
                <h2 class="text-center pt-3">Nuevos casos</h2>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="mb-5" md="4" sm="6">
            <v-card
              class="d-flex align-content-center flex-wrap mx-auto"
              width="200"
              height="200">
              <v-card-text>
                <p class="text-center number">{{data.latest_stat_by_country[0].new_deaths}}</p>
                <h2 class="text-center pt-3">Nuevas dfunciones</h2>
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
      <v-col offset-xs="1" xs="10">
        <p class="text-right">* Información recabada el día {{currentDate}}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data () {
    return {
      currentDate: '',
      data: {
        country: 'Mexico',
        latest_stat_by_country: [
          {
            id: '384671',
            country_name: 'Mexico',
            total_cases: '1,215',
            new_cases: '121',
            active_cases: '1,151',
            total_deaths: '29',
            new_deaths: '1',
            total_recovered: '35',
            serious_critical: '1',
            region: null,
            total_cases_per1m: '9',
            record_date: '2020-04-01 04:30:01.645'
          }
        ]
      }
    }
  },
  created() {
    let date = new Date(this.data.latest_stat_by_country[0].record_date)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    this.currentDate = date.toLocaleDateString("es-ES", options)
  }
}
</script>

<style scoped>
  .number {
    font-size: 50px;
    color: #e74c3c;
    font-weight: 700;
  }
  .mex {
    margin: 0 auto;
  }
</style>