import CircleCheck from '@assets/icon/circleCheck.svg?react'
import Time from '@assets/icon/time.svg?react'
import Delivery from '@assets/icon/delivery.svg?react'
import Parish from '@assets/icon/parish.svg?react'
import RightArrow from '@assets/icon/rightArrow.svg?react'

import styles from '@components/sections/realization/MomfanyMusic/MomfanyProcess.module.scss'

function MomfanyProcess() {
  return (
    <section className={styles.process}>
      <div className={styles.process__inner}>
        <div>
          <div>
            <h3 className={styles.process__title}>맘펴니 뮤직 진행 과정</h3>
            <div className={styles.process__container}>
              <div>
                <Time className={styles.process__container__icon} />
                <p className={styles.process__container__desc}>
                  시간 및 요일 결정
                </p>
              </div>
              <div>
                <RightArrow className={styles.process__container__arrow} />
              </div>
              <div>
                <Delivery className={styles.process__container__icon} />
                <p className={styles.process__container__desc}>
                  교구와 영상 전달
                </p>
              </div>
              <div>
                <RightArrow className={styles.process__container__arrow} />
              </div>
              <div>
                <Parish className={styles.process__container__icon} />
                <p className={styles.process__container__desc}>
                  자유로운 음악놀이
                </p>
              </div>
              <div>
                <RightArrow className={styles.process__container__arrow} />
              </div>
              <div>
                <CircleCheck className={styles.process__container__icon} />
                <p className={styles.process__container__desc}>수거</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MomfanyProcess
