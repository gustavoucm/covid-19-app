import {http, httpCountry, httpAS} from '../../../main'

const actions = {
  /* eslint-disable */
  getLastByCountry ({commit, dispatch}, payload) {
    let country = payload.event.country
    let url = `latest_stat_by_country.php?country=${country}`
    http.defaults.headers.common['x-rapidapi-host'] = 'coronavirus-monitor.p.rapidapi.com'
    http.defaults.headers.common['x-rapidapi-key'] = 'beff65a3c7mshcff81f1e403bdcep1bfd92jsnfb2bbf4a1692'
    http.get(url, {}, {})
      .then(response => {
        commit('onGet', {event: payload.event, response})
      },
      error => {
        commit('onError', {event: event.payload, error})
      })
  },
  getByCountry ({commit, dispatch}, payload) {
    let url = 'cases_by_country.php'
    http.defaults.headers.common['x-rapidapi-host'] = 'coronavirus-monitor.p.rapidapi.com'
    http.defaults.headers.common['x-rapidapi-key'] = 'beff65a3c7mshcff81f1e403bdcep1bfd92jsnfb2bbf4a1692'
    http.get(url, {}, {})
      .then(response => {
        commit('onGetByCountry', {event: payload.event, response})
      },
      error => {
        commit('onError', {event: event.payload, error})
      })
  },
  getStatistics ({commit, dispatch}, payload) {
    let url = `statistics?country=${payload.event.country}`
    httpAS.defaults.headers.common['x-rapidapi-host'] = 'covid-193.p.rapidapi.com'
    httpAS.defaults.headers.common['x-rapidapi-key'] = 'beff65a3c7mshcff81f1e403bdcep1bfd92jsnfb2bbf4a1692'
    httpAS.get(url, {}, {})
      .then(response => {
        commit('onGetStatistics', {event: payload.event, response})
      },
      error => {
        commit('onError', {event: event.payload, error})
      })
  },
  getWorldStatus ({commit, dispatch}, payload) {
    let url = 'worldstat.php'
    http.defaults.headers.common['x-rapidapi-host'] = 'coronavirus-monitor.p.rapidapi.com'
    http.defaults.headers.common['x-rapidapi-key'] = 'beff65a3c7mshcff81f1e403bdcep1bfd92jsnfb2bbf4a1692'
    http.get(url, {}, {})
      .then(response => {
        commit('onGetWorldStat', {event: payload.event, response})
      },
      error => {
        commit('onError', {event: event.payload, error})
      })
  },
  getCountryInfo ({commit, dispatch}, payload) {
    let country = payload.event.country
    let url = `name/${country}?fullText=true`
    httpCountry.get(url, {}, {})
      .then(response => {
        commit('onGetCountryInfo', {event: payload.event, response})
      },
      error => {
        commit('onError', {event: event.payload, error})
      })
  }
}

export default actions