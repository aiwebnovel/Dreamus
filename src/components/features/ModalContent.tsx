import { useModal } from '@/context/ModalContext'

import styles from '@components/features/ModalContent.module.scss'
import Close from '@assets/icon/close.svg?react'
import Modal from './Modal'

function ModalContent() {
  const { modalType, closeModal } = useModal()

  if (!modalType) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modal__inner}>
        {modalType === 'text' ? <Modal type="text" /> : <Modal type="video" />}
        <Close onClick={closeModal} className={styles.modal__close} />
      </div>
    </div>
  )
}

export default ModalContent
