import axios from 'axios'

const URL = 'https://covid-19-data.p.rapidapi.com/'
const API_KEY = '43215d066fmshe4fe57580efed39p12d4d2jsn3cc28ab9db64'
const API_HOST = 'covid-19-data.p.rapidapi.com'

function getCountry (country) {
  const options = {
    method: 'GET',
    url: `${URL}country/`,
    params: { name: country },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  }
  return axios.request(options)
    .then((response) => response.data)
    .catch(function (error) {
      console.error(error)
    })
}

function getCountryByCode (code) {
  const options = {
    method: 'GET',
    url: `${URL}country/code/`,
    params: { name: code },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  }
  return axios.request(options)
    .then((response) => response.data)
    .catch(function (error) {
      console.error(error)
    })
}

function getDailyReportTotals (date) {
  const options = {
    method: 'GET',
    url: `${URL}report/totals/`,
    params: { date: date },
    headers: {
      'x-rapidapi-key': '43215d066fmshe4fe57580efed39p12d4d2jsn3cc28ab9db64',
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
    }
  }

  return axios.request(options).then(function (response) {
    console.log(response.data)
  }).catch(function (error) {
    console.error(error)
  })
}

function getLastestTotals () {
  const options = {
    method: 'GET',
    url: `${URL}totals/`,
    headers: {
      'x-rapidapi-key': '43215d066fmshe4fe57580efed39p12d4d2jsn3cc28ab9db64',
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
    }
  }

  return axios.request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error)
    })
}

export { getDailyReportTotals, getCountry, getLastestTotals, getCountryByCode }
