import { enableStaticRendering } from 'mobx-react'

import stores from 'stores'

const isServer = typeof window === 'undefined'

enableStaticRendering(isServer)

export default function initializeStore(defaultStore: Record<string, any> = null) {
	let initStore = defaultStore

	if (isServer) {
		return stores
	}
	if (stores === null) {
		initStore = stores
	}

	return initStore
}
