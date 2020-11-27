export type ApiClient = {
	[name: string]: Function
}

export type Request = {
	path: string
	method: string
	type?: 'form' | null
	headers?: Object
	body?: Object
	query?: Object
	params?: Object
	data?: string
}
