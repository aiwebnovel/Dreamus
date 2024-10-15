import React from 'react'

import MusicFlex from '@components/features/MusicFlex'

import thinkingData from '@data/thinkingData'

import Music from '@assets/icon/music.svg?react'

import styles from '@components/sections/realization/SingsingqMusic/SingSingQIntroduce.module.scss'

import singsingq_1 from '@assets/image/singsingq_1.png'
import singsingq_2 from '@assets/image/singsingq_2.png'
import singsingq_3 from '@assets/image/singsingq_3.png'
import singsingq_4 from '@assets/image/singsingq_4.png'
import singsingq_5 from '@assets/image/singsingq_5.png'
import singsingq_6 from '@assets/image/singsingq_6.png'

function SingSingQIntroduce() {
  return (
    <section className={styles.singsingq}>
      <div className={styles.singsingq__inner}>
        <div>
          <div className={styles.singsingq__introduce}>
            <div className={styles.singsingq__titleContainer}>
              <Music className={styles.singsingq__icon} />
              <h1 className={styles.singsingq__title}>씽씽큐 뮤직</h1>
            </div>
            <p
              className={styles.singsingq__desc}
            >{`에밀자크 달크로즈의 음악이론 + 하워드 가느너 다중지능이론 + 긍정창의놀이를 결합하여 재해석 하였습니다. 
            현재의 아이들에게 맞춘 수업진행과 300여종의 악기, 교구가 함께 합니다.
            `}</p>
          </div>
          <div className={styles.singsingq__curriculum}>
            <h2 className={styles.singsingq__curriculum__title}>
              씽씽큐 뮤직 커리큘럼
            </h2>
            <div className={styles.singsingq__curriculum__week}>
              {thinkingData.map((item, index) => (
                <React.Fragment key={index}>
                  <MusicFlex
                    key={index}
                    logoUrl={item.logoUrl}
                    title={item.title}
                    firstDesc={item.firstDesc}
                    secondDesc={item.secondDesc}
                    img={item.img}
                    isReverse={index % 2 !== 0}
                  />
                  {index !== 3 ? (
                    <hr className={styles.singsingq__line} />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            <div>
              {/* <h2 className={styles.singsingq__curriculum__title}>
                3, 4세 노리뮤직
              </h2> */}
              <img src={singsingq_1} width={'100%'} />
              <img
                src={singsingq_2}
                width={'100%'}
                className={styles.singsingq__img}
              />
              <img src={singsingq_3} width={'100%'} />
              <img
                src={singsingq_4}
                width={'100%'}
                className={styles.singsingq__img}
              />
              <img src={singsingq_5} width={'100%'} />
              <img src={singsingq_6} width={'100%'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingSingQIntroduce
