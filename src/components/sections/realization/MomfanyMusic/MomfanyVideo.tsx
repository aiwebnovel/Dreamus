import styles from '@components/sections/realization/MomfanyMusic/MomfanyVideo.module.scss'

import Play from '@assets/icon/play.svg?react'

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
