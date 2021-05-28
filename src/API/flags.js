import axios from 'axios'

const URL = 'https://restcountries.eu/rest/v2/'

function getFlags () {
  const options = {
    method: 'GET',
    url: `${URL}all`
  }

  return axios.request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error)
    })
}

function getFlagsByRegion (region) {
  const options = {
    method: 'GET',
    url: `${URL}region/${region}`
  }
  return axios.request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error)
    })
}

function getFlagsByName (name) {
  const options = {
    method: 'GET',
    url: `${URL}name/${name}`
  }
  return axios.request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error)
    })
}

export { getFlags, getFlagsByRegion, getFlagsByName }
