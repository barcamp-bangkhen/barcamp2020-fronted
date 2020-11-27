import useInject from 'core/mobx/hooks/useInject'
import ModalStore from 'core/store/stores/ModalStore'

interface Stores {
  [key: string]: ModalStore
}

export default function useCloseModal(storeName: string) {
  return useInject((stores: Stores) => ({
    isOpen: stores[storeName].isOpen,
    close: stores[storeName].close,
  }))
}
