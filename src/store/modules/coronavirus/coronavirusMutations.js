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
  }
}

export default mutations
