import {
	observable,
	action,
	runInAction,
	computed,
	intercept,
	ObservableMap,
} from 'mobx'

export enum FETCH_STATE {
	idle = 'idle',
	loading = 'loading',
	fetched = 'fetched',
	error = 'error',
}

export type FetchStateStoreOption = {
	throwException?: boolean
}

class FetchStateStore {
	@observable
	fetchState: FETCH_STATE = FETCH_STATE.idle

	@observable
	error: Error

	option: FetchStateStoreOption

	constructor(option: FetchStateStoreOption = { throwException: true }) {
		this.option = option
	}

	@action
	async fetch(fetchPromise: any | Promise<any>) {
		try {
			this.error = null
			this.fetchState = FETCH_STATE.loading
			const result = await fetchPromise
			runInAction(() => {
				this.fetchState = FETCH_STATE.fetched
			})
			return result
		} catch (e) {
			runInAction(() => {
				this.fetchState = FETCH_STATE.error
				this.error = e
			})
			if (this.option.throwException) {
				throw e
			}
		}
		return null
	}

	performIfNotLoading(action: () => void | Promise<void>) {
		if (!this.loading) {
			action()
		} else {
			intercept<string, FETCH_STATE>(
				(this as any) as ObservableMap<string, FETCH_STATE>,
				'fetchState',
				change => {
					if (change.newValue !== FETCH_STATE.loading) {
						action()
					}
					return change
				},
			)
		}
	}

	@computed
	get loading() {
		return this.fetchState === FETCH_STATE.loading
	}

	@computed
	get ready() {
		return this.fetchState === FETCH_STATE.fetched
	}
}

export default FetchStateStore
