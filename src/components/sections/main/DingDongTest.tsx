import happyBridge from '@assets/image/happyBridge.png'
import disinfection from '@assets/image/disinfection.png'
import jack from '@assets/image/jack.jpeg'
import five from '@assets/image/five.png'
import four_1 from '@assets/image/four_1.png'
import four_2 from '@assets/image/four_2.png'

import styles from '@components/sections/main/DingDongTest.module.scss'

function DingDongTest() {
  return (
    <section className={styles.test}>
      <div className={styles.test__inner}>
        <div className={styles.test__container}>
          <p className={styles.test__title}>
            Q. 띵동을 하면 회복탄력성이 생기나요? 다른 프로그램이랑 뭐가
            다른데요?
          </p>
          <p className={styles.test__desc}>
            A. 네! 띵동은 이렇게 차별화 했습니다.
          </p>
          <p className={styles.test__titleText}>1. 동화의 차별화</p>
          <div className={styles.test__grid__inner}>
            <div className={styles.test__grid__youtubeContainer}>
              <div className={styles.test__grid__youtubeContainer__text}>
                <p className={styles.test__grid__youtubeContainer__text__desc}>
                  Only 띵동!
                  <br />
                  <p
                    className={
                      styles.test__grid__youtubeContainer__text__desc__point
                    }
                  >
                    “긍정창의 동화“ <br />
                    유아에게 긍정창의력을 심어주기 위한 <br />
                  </p>
                  최비결 대표의 창작동화
                </p>
              </div>
              <div className={styles.test__grid__youtubeContainer__youtube}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/zvIxQ0W8TUo"
                  title="띵동이와 바다마녀/ 환경동화 / 뮤지컬동화 / 분리수거 동화"
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className={styles.test__grid__youtubeContainer__text}>
                <p className={styles.test__grid__youtubeContainer__text__desc}>
                  Only 띵동! <br />
                  <p
                    className={
                      styles.test__grid__youtubeContainer__text__desc__point
                    }
                  >
                    “발상의 전환 동화“ <br />
                    고전동화를 긍정, 자존감으로 <br />
                  </p>
                  재해석
                </p>
              </div>
              <div className={styles.test__grid__youtubeContainer__youtube}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Hym8KC9SjpQ"
                  title="미운아기오리 / 발상의 전환 / 유아동화 / 동기부여동화 /마음동화"
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>

          <p className={styles.test__titleText}>2. 동화 구연의 차별화</p>
          {/* <div className={styles.test__grid__inner}>
            <div className={styles.test__grid__container}>
              <div className={styles.test__grid__container__image}>
                <img src={storyImg1} />
              </div>
              <div className={styles.test__grid__container__text}>
                1주 - 아니? 동화 등장인물에 내 얼굴이? {'<내가 주인공 동화>'}
              </div>
              <div className={styles.test__grid__container__image}>
                <img src={storyImg2} />
              </div>
              <div className={styles.test__grid__container__text}>
                2주 - 이 친구에겐 이 악기를 줄래요 {'<나는 감독님 동화>'}
              </div>
            </div>
            <div className={styles.test__grid__container}>
              <div className={styles.test__grid__container__image}>
                <img src={storyImg1} />
              </div>
              <div className={styles.test__grid__container__text}>
                3주 - 동화 속 친구들과 노래해요 {'<뮤지컬 동화>'}
              </div>
              <div className={styles.test__grid__container__image}>
                <img src={storyImg2} />
              </div>
              <div className={styles.test__grid__container__text}>
                4주 - 그 문제는 내가 해결해줄게! {'<문제해결동화>'}
              </div>
            </div>
          </div> */}
          <img src={four_1} width={'100%'} />
          <img src={four_2} width={'100%'} />

          <p className={styles.test__titleText}>3. 스토리 연결의 차별화</p>
          <img src={happyBridge} width={'100%'} />

          <p className={styles.test__titleText}>4. 보호자와 소통의 차별화</p>
          <div className={styles.test__grid__inner}>
            <div className={styles.test__grid__fourContainer}>
              <img src={jack} width={'100%'} />
              <div className={styles.test__grid__youtubeContainer__text}>
                <p className={styles.test__grid__youtubeContainer__text__desc}>
                  <p
                    className={
                      styles.test__grid__youtubeContainer__text__desc__point
                    }
                  >
                    Q.선생님! <br />이 활동이 뭐에 좋은가요? <br />
                  </p>
                  <br />
                  A.네~ <br />각 놀이 별 발달 피토그램으로 안내드릴게요^^ <br />
                  발달요소 피토그램 제작
                </p>
              </div>
            </div>
          </div>

          <p className={styles.test__titleText}>5. 강사 교육의 차별화</p>
          <img src={five} width={'100%'} />
          <p className={styles.test__titleText}>6. 교구 관리의 차별화</p>
          <div className={styles.test__grid__inner}>
            <div className={styles.test__grid__fourContainer}>
              <img src={disinfection} width={'100%'} />
              <div className={styles.test__grid__youtubeContainer__text}>
                <p className={styles.test__grid__youtubeContainer__text__desc}>
                  <p
                    className={
                      styles.test__grid__youtubeContainer__text__desc__point
                    }
                  >
                    지금 선생님이 가지고 온 그 교구, <br />
                    어떻게 관리 될까요? <br />
                    띵동은 깨끗하게, 맑게, 자신있게!!
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DingDongTest
