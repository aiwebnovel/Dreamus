import PianoTeacher from '@assets/icon/pianoTeacher.svg?react'
// import Up from '@assets/icon/up.svg?react'
import class1 from '@assets/image/class1.jpg'
import class2 from '@assets/image/class2.jpg'
import class3 from '@assets/image/class3.jpg'
import class4 from '@assets/image/class4.jpg'

import class5 from '@assets/image/class5.png'
import class6 from '@assets/image/class6.png'
import class7 from '@assets/image/class7.png'

import piano_char from '@assets/image/piano_char.png'
import piano_char1 from '@assets/image/piano_char1.jpeg'
import piano_char2 from '@assets/image/piano_char2.png'

import styles from '@components/sections/realization/LululalaPiano/PianoClass.module.scss'

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
              <p>수업은 어떻게?</p>
              <p>수업은 이렇게!</p>
            </div>
          </div>
        </div>

        <div className={styles.class__classImgContainer}>
          <div>
            <div className={styles.class__activity}>
              <h3 className={styles.class__activity__title}>Activity 연주</h3>
              <p className={styles.class__activity__subTitle}>
                청음활동, 짝궁과 신체표현, 율동과 게임
              </p>
            </div>
            <div className={styles.class__activity__gridContainer}>
              <div>
                <img className={styles.class__activity__img} src={class1} />
                <p className={styles.class__activity__desc}>
                  짝꿍과 손을 잡고 노래에 맞춰 춤을 추고 있어요.
                </p>
              </div>
              <div>
                <img className={styles.class__activity__img} src={class2} />
                <p className={styles.class__activity__desc}>
                  "도" 소리가 나오면 듣고 도를 연주해요.
                </p>
              </div>
              <div>
                <img className={styles.class__activity__img} src={class3} />
                <p className={styles.class__activity__desc}>
                  다시 음악이 나오면 음악에 맞춰 율동을 해요.
                </p>
              </div>
              <div>
                <img className={styles.class__activity__img} src={class4} />
                <p className={styles.class__activity__desc}>
                  불협화음 독수리가 나오면 숨어야 해요!
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
                  핸드벨과 피아노의 콜라보 연주를 준비해요
                </p>
              </div>
              <div className={styles.class__collaboration__item}>
                <img
                  className={styles.class__collaboration__img}
                  src={class6}
                />
                <p className={styles.class__collaboration__desc}>
                  선생님의 지시에 따라 핸드벨을 준비해요
                </p>
              </div>
              <div className={styles.class__collaboration__item}>
                <img
                  className={styles.class__collaboration__img}
                  src={class7}
                />
                <p className={styles.class__collaboration__desc}>
                  친구들과 핸드벨을 이용해 화음을 만들어요
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
                <img className={styles.class__story__img} src={piano_char} />
                <p className={styles.class__story__desc}>음악기호의 캐릭터화</p>
              </div>
              <div className={styles.class__story__item}>
                <img className={styles.class__story__img} src={piano_char1} />
                <p className={styles.class__story__desc}>
                  동화를 이용한 스토리텔링
                </p>
              </div>
              <div className={styles.class__story__item}>
                <img className={styles.class__story__img} src={piano_char2} />
                <p className={styles.class__story__desc}>
                  창작음원으로 재미있는 연주
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.class__textBook}>
          <div>
            <div className={styles.class__textBook__container}>
              <div className={styles.class__textBook__imgContainer}>
                <PianoTeacher
                  className={styles.class__textBook__imgContainer__img}
                />
              </div>
              <div className={styles.class__textBook__descContainer}>
                <p className={styles.class__textBook__firstDesc}>피아노 교재</p>
                <p className={styles.class__textBook__secondDesc}>
                  선생님~ 피아노 교재는 뭔가요?
                </p>
                <p className={styles.class__textBook__secondDesc}>
                  룰루랄라 피아노 교재는
                  <span> 신.청.곡</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.class__register}>
          <div>
            <div className={styles.class__register__flexContainer}>
              <div className={styles.class__register__item}>
                <p className={styles.class__register__text}>
                  더 이상 반복되는 교재는
                </p>
                <p className={styles.class__register__no}>NO!</p>
              </div>
              <div className={styles.class__register__item}>
                <p className={styles.class__register__text}>
                  아이가 좋아하는 곡으로,
                </p>
                <p className={styles.class__register__text}>
                  아이의 성취감도 UP!
                  {/* <Up className={styles.class__register__icon} /> */}
                </p>
                <p className={styles.class__register__text}>
                  아이의 만족도도 UP!
                  {/* <Up className={styles.class__register__icon} /> */}
                </p>
              </div>
            </div>
            <div className={styles.class__register__btnContainer}>
              <p className={styles.class__register__btnText}>
                <span>신</span>나게, <span>청</span>해주렴,
                <br /> 너희가 연주하고 싶은 <span>곡</span>
              </p>
              {/* <button className={styles.class__register__btn}>
                수업 신청하기
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PianoClass
