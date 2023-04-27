import axios from 'axios'

export const apiBaseURL = 'https://api.punkapi.com/v2/'

export enum MethodType {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const beersEndpoint = `beers`

export const createApiGetCall = async ({ url = '', data = {} }) => {
  const urlParams = data ? '?' + new URLSearchParams(data) : ''
  return axios.get(`${apiBaseURL}${url}${urlParams}`)
}
