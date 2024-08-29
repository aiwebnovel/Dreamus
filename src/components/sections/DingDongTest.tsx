import Tinking from '@assets/icon/think.svg?react'

import styles from '@components/sections/DingDongTest.module.scss'

function DingDongTest() {
  return (
    <section className={styles.test}>
      <div className={styles.test__inner}>
        <div className={styles.test__container}>
          <h3 className={styles.test__title}>
            회복탄력성을 기르는 긍정창의 놀이 - 띵동{' '}
            <span>
              <Tinking className={styles.test__icon} />
            </span>
          </h3>
          <p className={styles.test__desc}>
            지금 내 아이의 회복탄력성을 분석해보세요.
          </p>
          <div className={styles.test__btnContainer}>
            <button className={styles.test__btnContainer__btn}>
              무료 회복탄력성 분석 검사 바로가기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DingDongTest
