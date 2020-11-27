import { get } from 'lodash'
import { action, computed } from 'mobx'

import FetchStateStore from 'core/store/stores/FetchStateStore'

class NotFoundableFetchStateStore extends FetchStateStore {
  @action
  async fetch(fetchPromise: Promise<any>) {
    try {
      const result = await super.fetch(fetchPromise)
      return result
    } catch (e) {
      if (!this.notFound) {
        throw e
      }
    }
  }

  @computed
  get notFound() {
    return get(this.error, ['response', 'status']) === 404
  }
}

export default NotFoundableFetchStateStore
