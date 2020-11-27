import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import qs from 'qs'

import { Request } from './types'

export const REQUEST_TYPES = {
	form: 'form',
}

class APIClient {
	client: AxiosInstance

	constructor(options: AxiosRequestConfig) {
		this.client = axios.create(options)
	}

	serializeParams(params: Record<string, any>) {
		return qs.stringify(params, { arrayFormat: 'repeat' })
	}

	fetch<T = any>({ headers = {}, method, type, body = {}, params = {}, path }: Request) {
		const request = {
			method,
			headers,
			url: path,
			params,
			paramsSerializer: this.serializeParams,
			data: body,
		} as AxiosRequestConfig

		return this.client.request<T>(request).then(res => res.data)
	}
}

export default APIClient
