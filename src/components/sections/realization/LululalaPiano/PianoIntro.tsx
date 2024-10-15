// import Piano from '@assets/icon/piano.svg?react'
// import Up from '@assets/icon/up.svg?react'

import piano_1 from '@assets/image/piano_1.jpg'

import styles from '@components/sections/realization/LululalaPiano/PianoIntro.module.scss'

function PianoIntro() {
  return (
    <section className={styles.piano}>
      <div className={styles.piano__inner}>
        <div className={styles.piano__container}>
          <div className={styles.piano__introduce}>
            <div className={styles.piano__introduce__text}>
              <p>피아노는 어렵다고 생각하시나요?</p>
              <p>10년간 축척된 노하우는 다릅니다!</p>
              <p>룰루랄라 피아노를 경험해보세요!</p>
            </div>
            <div className={styles.piano__introduce__img}>
              <img src={piano_1} width={'100%'} />
            </div>
          </div>

          <div className={styles.piano__reason}>
            <div className={styles.piano__reason__textContainer}>
              <p className={styles.piano__reason__title}>
                <span className={styles.piano__reason__subTitle}>WHY?</span>{' '}
                <span>룰루랄라 피아노여야 하나요?</span>
              </p>
              <div className={styles.piano__reason__descContainer}>
                <div>
                  <p className={styles.piano__reason__descContainer__title}>
                    아이들의 음악적{' '}
                    <span className={styles.piano__pointText1}>관심도</span> UP!
                    {/* <Up className={styles.piano__reason__descContainer__icon} /> */}
                  </p>
                  <span
                    className={styles.piano__reason__descContainer__subTitle}
                  >
                    피아노를 통해 음악적 관심을 향상시켜요
                  </span>
                </div>
                <div>
                  <p className={styles.piano__reason__descContainer__title}>
                    아이들의 생각의{' '}
                    <span className={styles.piano__pointText2}>깊이도</span> UP!
                    {/* <Up className={styles.piano__reason__descContainer__icon} /> */}
                  </p>
                  <p className={styles.piano__reason__descContainer__subTitle}>
                    악보를 보며 아이들의 생각에 깊이를 더해요
                  </p>
                </div>
                <div>
                  <p className={styles.piano__reason__descContainer__title}>
                    아이들의 집중력{' '}
                    <span className={styles.piano__pointText3}>향상도</span> UP!
                    {/* <Up className={styles.piano__reason__descContainer__icon} /> */}
                  </p>
                  <p className={styles.piano__reason__descContainer__subTitle}>
                    스토리텔링을 통한 집중력을 향상시켜요
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.piano__reason__textContainer}>
              <p className={styles.piano__reason__title}>
                <span className={styles.piano__reason__subTitle}>
                  UP! UP! UP!
                </span>
                <span>단계별로 성장하는 우리 아이들!</span>
              </p>
              <div className={styles.piano__reason__descContainer}>
                <div>
                  <h3 className={styles.piano__reason__descContainer__title}>
                    1단계: 룰루랄라
                  </h3>
                  <p className={styles.piano__reason__descContainer__subTitle}>
                    재미있게 흥얼거리며 연주할 수 있는 단계
                  </p>
                </div>
                <div>
                  <h3 className={styles.piano__reason__descContainer__title}>
                    2단계: 생각하기
                  </h3>
                  <p className={styles.piano__reason__descContainer__subTitle}>
                    악보와 함께 연주할 수 있는 단계
                  </p>
                </div>
                <div>
                  <h3 className={styles.piano__reason__descContainer__title}>
                    3단계: 집중하기
                  </h3>
                  <p className={styles.piano__reason__descContainer__subTitle}>
                    듣고, 보고, 생각하고 양손으로 연주하는 단계
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PianoIntro
