import styles from '@components/sections/DingDongIntroduce.module.scss'

import Video from '@assets/icon/video.svg?react'
import Text from '@assets/icon/text.svg?react'

function DingDongIntroduce() {
  return (
    <section className={styles.introduce}>
      <div className={styles.introduce__inner}>
        <div className={styles.introduce__container}>
          <div className={styles.introduce__text}>
            <p className={styles.introduce__text__main}>
              <span className={styles.introduce__text__sub}>띵동</span>,
              회복탄력성 키워지나요?
            </p>
            <p className={styles.introduce__text__main}>
              띵동이 회복탄력성을 키우는 방법
            </p>
            <p className={styles.introduce__text__main}>바로 확인해보세요!</p>
          </div>
          <div className={styles.introduce__intro}>
            <div className={styles.introduce__intro__box}>
              <Video className={styles.introduce__icon} />
              <h4 className={styles.introduce__intro__text}>
                영상으로 확인하기
              </h4>
              <p className={styles.introduce__intro__subText}>
                띵동이 회복탄력성을 만들어내는 방법 <br />
                영상으로 확인해 보세요!
              </p>
            </div>
            <div className={styles.introduce__intro__box}>
              <Text className={styles.introduce__icon} />
              <h4 className={styles.introduce__intro__text}>글로 읽어보기</h4>
              <p className={styles.introduce__intro__subText}>
                띵동이 회복탄력성을 만들어내는 방법 <br />잘 정리된 글을
                읽어보세요!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DingDongIntroduce
