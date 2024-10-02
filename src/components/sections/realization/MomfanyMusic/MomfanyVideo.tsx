import styles from '@components/sections/realization/MomfanyMusic/MomfanyVideo.module.scss'

import Time from '@assets/icon/time.svg?react'
import Child from '@assets/icon/child.svg?react'
import Play from '@assets/icon/play.svg?react'
import Expert from '@assets/icon/expert.svg?react'

const momfanyIntroduce = [
  {
    src: Time,
    title: '기존 수업보다 2배 긴 시간',
    desc: '아이들이 충분히 음악을 즐기고 배울 수 있는 여유로운 시간을 제공합니다.',
  },
  {
    src: Child,
    title: '아이들의 시간에 맞춰 언제나',
    desc: '유연한 스케줄로 원하는 시간에 언제든지 수업을 진행할 수 있습니다.',
  },
  {
    src: Play,
    title: '맘펴니 대표의 수업 진행 영상',
    desc: '전문가의 생생한 수업 진행을 영상으로 만나보세요.',
  },
  {
    src: Expert,
    title: '전문가가 만든 교구와 음원',
    desc: '15년 이상 풍부한 경험을 바탕으로 제작된 고품질의 교구와 음원을 제공합니다.',
  },
]

function MomfanyVideo() {
  return (
    <section className={styles.video}>
      <div className={styles.video__inner}>
        <div>
          <h2 className={styles.video__title}>맘펴니 뮤직</h2>
          <p className={styles.video__desc}>수업을 대여하는 맘펴니 뮤직</p>
          <p className={styles.video__desc}>시간은 자유롭게, 아이들은 맘편히</p>
        </div>
        {/* 여기 */}
        <div className={styles.video__gridContainer}>
          <div className={styles.video__gridContainer__grid}>
            {momfanyIntroduce.map((intro, index) => (
              <div className={styles.video__gridContainer__item} key={index}>
                <div className={styles.video__gridContainer__title}>
                  <intro.src className={styles.video__gridContainer__icon} />
                  <p>{intro.title}</p>
                </div>
                <p className={styles.video__gridContainer__desc}>
                  {intro.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* 여기 */}
        <div className={styles.video__container}>
          <div>
            {/* <video>
                  <source />
                </video> 
                비디오 넣으세요*/}
            <div className={styles.video__fake}></div>
            <div className={styles.video__play}>
              <button className={styles.video__play__btn}>
                <Play className={styles.video__play__icon} />
                영상 재생
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MomfanyVideo
