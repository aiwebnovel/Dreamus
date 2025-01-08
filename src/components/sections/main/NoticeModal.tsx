import React from 'react'
import styles from '@/components/sections/main/NoticeModal.module.scss'

interface NoticeModalProps {
  imageUrl: string
  onClose: () => void
  onDontShowAgain: () => void
}

const NoticeModal: React.FC<NoticeModalProps> = ({
  imageUrl,
  onClose,
  onDontShowAgain,
}) => {
  if (!imageUrl) {
    return null
  }

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <img src={imageUrl} alt="공지사항" className={styles.noticeImage} />
        <div className={styles.buttonContainer}>
          <button onClick={onClose} className={styles.closeButton}>
            닫기
          </button>
          <button onClick={onDontShowAgain} className={styles.dontShowButton}>
            다시 보지 않기
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoticeModal
