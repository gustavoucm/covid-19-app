const mutations = {
  onGet (state, payload) {
    payload.event.context.data = payload.response.data
    payload.event.context.getDate()
  },
  onGetByCountry (state, payload) {
    payload.event.context.data = payload.response.data.countries_stat
  },
  onGetWorldStat(state, payload) {
    payload.event.context.worldStat = payload.response.data
  },
  onGetCountryInfo(state, payload) {
    payload.event.context.countryInfo = payload.response.data[0]
    payload.event.context.showCountryInfo = true
  },
  onGetStatistics(state, payload) {
    payload.event.context.data = payload.response.data.response[0]
    payload.event.context.getDate()
  },
  onGetHistoryByCountry(state, payload) {
    let history = payload.response.data.response
    let labels = []
    let data = []
    let deaths = []
    let recovered = []
    let n = history.length < 16 ? history.length : 16
    for (let i = 0; i < n; i++) {
      // let date = new Date(history[i].time)
      let dateStr = history[i].time
      let date = dateStr.substring(0, 10)
      let time = dateStr.substring(11, 16)
      let dateFormatted = date + '\n' + time
      labels.push(dateFormatted)
      data.push(history[i].cases.total)
      deaths.push(history[i].deaths.total)
      recovered.push(history[i].cases.recovered)
    }
    data.reverse()
    labels.reverse()
    payload.event.context.chart.labels = labels
    payload.event.context.chart.data = data
    payload.event.context.chart.deaths = deaths
    payload.event.context.chart.recovered = recovered
    payload.event.context.generateChart()
  }
}

export default mutations
