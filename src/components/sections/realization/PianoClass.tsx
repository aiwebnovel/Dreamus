import PianoTeacher from '@assets/icon/pianoTeacher.svg?react'
import class1 from '@assets/image/class1.jpg'
import class2 from '@assets/image/class2.jpg'
import class3 from '@assets/image/class3.jpg'
import class4 from '@assets/image/class4.jpg'

import class5 from '@assets/image/class5.png'
import class6 from '@assets/image/class6.png'
import class7 from '@assets/image/class7.png'

import styles from '@components/sections/realization/PianoClass.module.scss'

function PianoClass() {
  return (
    <section className={styles.class}>
      <div className={styles.class__inner}>
        <div>
          <div className={styles.class__container}>
            <div className={styles.class__imgContainer}>
              <PianoTeacher className={styles.class__imgContainer__img} />
            </div>
            <div className={styles.class__descContainer}>
              <p>룰루랄라 피아노</p>
              <p>수업은 어떻게 이루어 질까요?</p>
              <p>수업은 이렇게 이루어 집니다!</p>
            </div>
          </div>
        </div>

        <div className={styles.class__classImgContainer}>
          <div>
            <div className={styles.class__activity}>
              <h3 className={styles.class__activity__title}>Activite 연주</h3>
              <p className={styles.class__activity__subTitle}>
                청음활동, 짝궁과 신체표현, 율동과 게임
              </p>
            </div>
            <div className={styles.class__activity__gridContainer}>
              <div>
                <img className={styles.class__activity__img} src={class1} />
                <p className={styles.class__activity__desc}>
                  짝꿍과 손을 잡고 노래에 맞춰 춤을 추고 있어요
                </p>
              </div>
              <div>
                <img className={styles.class__activity__img} src={class2} />
                <p className={styles.class__activity__desc}>
                  음계를 듣고 음계를 연주해보고 있어요
                </p>
              </div>
              <div>
                <img className={styles.class__activity__img} src={class3} />
                <p className={styles.class__activity__desc}>
                  다시 음악이 나오면 음악에 맞춰 율동을 해요
                </p>
              </div>
              <div>
                <img className={styles.class__activity__img} src={class4} />
                <p className={styles.class__activity__desc}>
                  불협화음 독수리가 나오면 숨어야 해요
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.class__collaboration}>
          <div>
            <div className={styles.class__collaboration__textContainer}>
              <h3 className={styles.class__collaboration__title}>
                Collaboration 연주
              </h3>
              <p className={styles.class__collaboration__subTitle}>
                다양한 악기를 사용한 콜라보 연주
              </p>
            </div>
            <div className={styles.class__collaboration__flexContainer}>
              <div className={styles.class__collaboration__item}>
                <img
                  className={styles.class__collaboration__img}
                  src={class5}
                />
                <p className={styles.class__collaboration__desc}>
                  핸드밸과 피아노의 콜라보 연주를 준비해요
                </p>
              </div>
              <div className={styles.class__collaboration__item}>
                <img
                  className={styles.class__collaboration__img}
                  src={class6}
                />
                <p className={styles.class__collaboration__desc}>
                  선생님의 지시에 따라 핸드볼을 준비해요
                </p>
              </div>
              <div className={styles.class__collaboration__item}>
                <img
                  className={styles.class__collaboration__img}
                  src={class7}
                />
                <p className={styles.class__collaboration__desc}>
                  친구들과 핸드폰을 이용해 화음을 만들어요
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.class__story}>
          <div>
            <div className={styles.class__storyContainer}>
              <h3 className={styles.class__story__title}>
                StoryTelling with Character
              </h3>
              <p className={styles.class__story__subTitle}>
                스토리 텔링을 통한 음악공부
              </p>
            </div>

            <div className={styles.class__story__flexContainer}>
              <div className={styles.class__story__item}>
                <img className={styles.class__story__img} src={class1} />
                <p className={styles.class__story__desc}>
                  코다, 코순이와 같은 캐릭터와 친해져요
                </p>
              </div>
              <div className={styles.class__story__item}>
                <img className={styles.class__story__img} src={class2} />
                <p className={styles.class__story__desc}>
                  무엇을 의미하는지 공부하고 이해해요
                </p>
              </div>
              <div className={styles.class__story__item}>
                <img className={styles.class__story__img} src={class3} />
                <p className={styles.class__story__desc}>
                  자연스럽게 인지하며 역할극 놀이를 해요
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.class__textBook}>
          <div>
            <div className={styles.class__container}>
              <div className={styles.class__imgContainer}>
                <PianoTeacher className={styles.class__imgContainer__img} />
              </div>
              <div className={styles.class__descContainer}>
                <p>피아노 교재</p>
                <p>선생님~ 피아노 교재는 뭐에요?</p>
                <p>
                  룰루랄라 피아노 교재는 {/* //여기 수정해야할 차례 9월1일 */}
                  <span className={styles.class__descContainer__highlight}>
                    신.청.곡
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PianoClass
