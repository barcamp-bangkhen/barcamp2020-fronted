import useInject from 'core/mobx/hooks/useInject'
import ModalStore from 'core/store/stores/ModalStore'

interface Stores {
  [key: string]: ModalStore
}

export default function useOpenModal(storeName: string) {
  return useInject((stores: Stores) => ({
    open: stores[storeName].open,
  }))
}
