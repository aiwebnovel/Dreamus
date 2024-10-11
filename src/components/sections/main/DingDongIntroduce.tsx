import styles from '@components/sections/main/DingDongIntroduce.module.scss'

import Video from '@assets/icon/video.svg?react'

import { useModal } from '@context/ModalContext'

function DingDongIntroduce() {
  const { openModal } = useModal()

  return (
    <section className={styles.introduce}>
      <div className={styles.introduce__inner}>
        <div className={styles.introduce__container}>
          <div className={styles.introduce__text}>
            <p className={styles.introduce__text__main}>
              좌절을 딛고 회복탄력성 상위
              <span className={styles.introduce__text__sub}> 0.01%</span> 가 된
              개발자!
            </p>
            <p className={styles.introduce__text__main}>
              생각놀이터 띵동 대표 인터뷰
            </p>
          </div>
          <div className={styles.introduce__intro}>
            <div
              className={styles.introduce__intro__box}
              onClick={() => openModal('video')}
            >
              <Video className={styles.introduce__icon} />
              <h4 className={styles.introduce__intro__text}>
                영상으로 확인하기
              </h4>
              <p className={styles.introduce__intro__subText}>
                생각놀이터 띵동 대표 인터뷰
              </p>
            </div>
            {/* <div
              className={styles.introduce__intro__box}
              onClick={() => openModal('text')}
            >
              <Text className={styles.introduce__icon} />
              <h4 className={styles.introduce__intro__text}>글로 읽어보기</h4>
              <p className={styles.introduce__intro__subText}>
                띵동이 회복탄력성을 만들어내는 방법 <br />잘 정리된 글을
                읽어보세요!
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DingDongIntroduce
