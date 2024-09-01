import PianoTeacher from '@assets/icon/pianoTeacher.svg?react'
import class1 from '@assets/image/class1.jpg'
import class2 from '@assets/image/class2.jpg'
import class3 from '@assets/image/class3.jpg'
import class4 from '@assets/image/class4.jpg'

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

        <div>
          <div>
            <div>
              <h3>Activite 연주</h3>
              <p>청음활동, 짝궁과 신체표현, 율동과 게임</p>
            </div>
            <div>
              <div>
                <img src={class1} />
                <p>짝꿍과 손을 잡고 노래에 맞춰 춤을 춰요.</p>
              </div>
              <div>
                <img src={class2} />
                <p>음계를 듣고 음계를 맞춰 연주해봐요</p>
              </div>
              <div>
                <img src={class3} />
                <p>다시 음악이 나오면 율동을 시작해요</p>
              </div>
              <div>
                <img src={class4} />
                <p>불협화음 독수리가 나오면 숨어야 해요</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PianoClass
