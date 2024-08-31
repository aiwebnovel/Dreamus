import { useModal } from '@context/ModalContext'

import Modal from '@components/features/Modal'

import styles from '@components/features/ModalContent.module.scss'

function ModalContent() {
  const { modalType } = useModal()

  if (!modalType) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modal__inner}>
        {modalType === 'text' ? <Modal type="text" /> : <Modal type="video" />}
      </div>
    </div>
  )
}

export default ModalContent
