// import MusicGrid from '@components/features/MusicGrid'

// import thinkingData from '@data/thinkingData'

import Music from '@assets/icon/music.svg?react'

import styles from '@components/sections/realization/SingSingQIntroduce.module.scss'

import uridMix from '@assets/image/umix.png'

import children1 from '@assets/image/children1.jpg'
import children2 from '@assets/image/children2.jpg'
import children3 from '@assets/image/children3.jpg'
import children4 from '@assets/image/children4.jpg'
import MusicFlex from '@components/features/MusicFlex'
import thinkingData from '@data/thinkingData'

function SingSingQIntroduce() {
  return (
    <section className={styles.singsingq}>
      {/* inner */}
      <div className={styles.singsingq__inner}>
        {/* content */}
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
                <MusicFlex
                  key={index}
                  logoUrl={item.logoUrl}
                  title={item.title}
                  firstDesc={item.firstDesc}
                  secondDesc={item.secondDesc}
                  img={item.img}
                />
              ))}
              {/* {thinkingData.map((item, index) => (
                <MusicGrid
                  key={index}
                  logoUrl={item.logoUrl}
                  title={item.title}
                  firstDesc={item.firstDesc}
                  secondDesc={item.secondDesc}
                  img={item.img}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingSingQIntroduce

{
  /* <div>
<div>
  <div>
    <img src={uridMix} />
  </div>
  <div>
    <div>
      <h2>1주차: 유리드믹스</h2>
      <p>약 300여종의 다양한 악기와 교구를 이용한 플레이뮤직</p>
    </div>
  </div>
</div>
<div>
  <div>
    <div>
      <p>유리드믹스</p>
      <p>아이들의 소리와 움직임으로</p>
      <p>음악의 즐거움을 발견하고</p>
      <p>전인적 발달을 돕습니다.</p>
    </div>
  </div>
  <div>
    <img src={children1} />
    <img src={children2} />
    <img src={children3} />
    <img src={children4} />
  </div>
</div>
</div> */
}
