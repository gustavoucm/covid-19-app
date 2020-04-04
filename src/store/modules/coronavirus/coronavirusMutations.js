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
  }
}

export default mutations
