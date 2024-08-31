import { createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom'

import ModalContent from '@components/features/ModalContent'

type ModalType = 'video' | 'text' | null

interface ModalContextType {
  modalType: ModalType
  openModal: (type: ModalType) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [modalType, setModalType] = useState<ModalType>(null)

  const openModal = (type: ModalType) => setModalType(type)
  const closeModal = () => setModalType(null)

  const $portal = document.getElementById('portal')

  return (
    <ModalContext.Provider value={{ modalType, openModal, closeModal }}>
      {children}
      {$portal != null ? createPortal(<ModalContent />, $portal) : null}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('Modal이 Provider 없이 사용되었습니다.')
  }
  return context
}
