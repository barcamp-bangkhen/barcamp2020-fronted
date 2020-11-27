import APIClient from 'core/api/client'
import config from 'core/config'

export function getEndpoint() {
  return config.apiUrl
}

export function serialize() {}

export function getClient() {
  const out = new APIClient({
    baseURL: getEndpoint(),
  })

  return out
}

const client = getClient()

export { client }
