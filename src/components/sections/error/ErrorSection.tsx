import { useNavigate } from 'react-router-dom'

import Back from '@assets/icon/back.svg?react'
import Error from '@assets/icon/error.svg?react'

import styles from '@components/sections/error/ErrorSection.module.scss'

function ErrorSection() {
  const navigate = useNavigate()
  return (
    <section className={styles.error}>
      <div className={styles.error__inner}>
        <div className={styles.error__container}>
          <div className={styles.error__iconContainer}>
            <Error className={styles.error__icon} />
          </div>
          <div className={styles.error__textContainer}>
            <p className={styles.error__desc}>잘못된 접근입니다.</p>
            <button className={styles.error__btn} onClick={() => navigate('/')}>
              <Back className={styles.error__btn__icon} />
              <span className={styles.error__btn__desc}>홈페이지 이동하기</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorSection
