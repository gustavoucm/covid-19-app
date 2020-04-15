const mutations = {
  onGet (state, payload) {
    payload.event.context.data = payload.response.data
    payload.event.context.getDate()
  },
  onGetByCountry (state, payload) {
    let countries = payload.response.data.countries_stat
    if (countries[0].country_name === "") {
      countries.splice(0, 1)
    }
    payload.event.context.data = countries
  },
  onGetWorldStat(state, payload) {
    payload.event.context.worldStat = payload.response.data
    if (payload.event.context.loading) {
      payload.event.context.loading = false
    }
  },
  onGetCountryInfo(state, payload) {
    payload.event.context.countryInfo = payload.response.data[0]
    payload.event.context.showCountryInfo = true
    payload.event.context.loading = false
  },
  onGetStatistics(state, payload) {
    payload.event.context.data = payload.response.data.response[0]
    payload.event.context.getDate()
  },
  onGetHistoryByCountry(state, payload) {
    let history = payload.response.data.response
    let data = []
    let recovered = []
    let confirm = []
    let deaths = []
    let n = history.length
    for (let i = 0; i < n; i++) {
      let date = new Date(history[i].time)
      confirm.push([date.getTime(), history[i].cases.total])
      deaths.push([date.getTime(), history[i].deaths.total])
      recovered.push([date.getTime(), history[i].cases.recovered])
    }
    data.push({
      name: 'Defunciones',
      data: deaths
    })
    data.push({
      name: 'Recuperados',
      data: recovered
    })
    data.push({
      name: 'Confirmados',
      data: confirm
    })
    payload.event.context.dataSeries = data
    payload.event.context.showChart()
  },
  onPostComment (state, payload) {
    payload.event.context.reset()
    payload.event.context.snackbar = true
  },
  onPostReport (state, payload) {
    payload.event.context.showSnackbar('success', 'Reporte creado con éxito')
    payload.event.context.reset()
  },
  onGetMexStatistics (state, payload) {
    let data = payload.data
    data.reverse()
    let urlMap = data[0].map
    let ratioMap = data[0].ratioMap
    data = data[0].states
    let states = []
    let positives = []
    data.forEach(state => {
      states.push(state.name)
      positives.push(state.positives)
    })
    payload.event.context.series = [{
      data: positives
    }]
    payload.event.context.chartOptions.xaxis.categories = states
    payload.event.context.imgMap = urlMap
    payload.event.context.ratioMap = ratioMap
    payload.event.context.showThisChart = true
  },
  onError (state, payload) {
    payload.event.context.showSnackbar('danger', payload.error)
  }
}

export default mutations
