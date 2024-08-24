import React from 'react'

import MusicFlex from '@components/features/MusicFlex'

import thinkingData from '@data/thinkingData'

import Music from '@assets/icon/music.svg?react'

import styles from '@components/sections/realization/SingSingQIntroduce.module.scss'

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
            >{`에밀자크 달크로즈의 유아음악이론을 재해석한 씽씽큐 뮤직은
            현재 아이들에게 맞춘 200여종의 악기와 교규가 함께하는 교육프로그램 입니다.
            스스로 노래하고 신체로 표현하며 자연스럽게 음악적 역량을 키웁니다.
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingSingQIntroduce
