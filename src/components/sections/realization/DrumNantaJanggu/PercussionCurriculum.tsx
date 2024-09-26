import { useNavigate } from 'react-router-dom'

import styles from '@components/sections/realization/DrumNantaJanggu/PercussionCurriculum.module.scss'

import RightArrow from '@assets/icon/rightArrow.svg?react'

import class1 from '@assets/image/class1.jpg'
import class2 from '@assets/image/class2.jpg'
import class3 from '@assets/image/class3.jpg'

const picture = [
  { src: class1, desc: '다양한 신체 움직임을 연습해요.' },
  { src: class2, desc: '그룹으로 모여 함께 연주해요.' },
  { src: class3, desc: '발표회를 통해 자신감을 길러요.' },
]

const curriculum = [
  {
    step: '1',
    title: '기본 신체 활동',
    description:
      '간단한 타악기 연주를 통해 손과 발의 협응 훈련과 다양한 신체 움직을 포함한 리듬게임',
  },
  {
    step: '2',
    title: '리듬 감각 훈련',
    description: '기본적인 리듬 패턴 배우기. 타악기를 사용한 리듬 맞추기 활동',
  },
  {
    step: '3',
    title: '협동 및 소통',
    description:
      '그룹으로 함께 연주하기, 서로의 소리에 맞춰 연주하는 협동 게임',
  },
  {
    step: '4',
    title: '감정 표현 및 창의성',
    description: '즉흥 연주 시간 제공 및 감정을 표현할 수 있는 음악 활동',
  },
  {
    step: '5',
    title: '문화 탐색 및 자신감 증진',
    description: '다양한 타악기 음악 장르 소개와 발표회를 통한 성취감 느끼기',
  },
]

function PercussionCurriculum() {
  const navigate = useNavigate()

  return (
    <section className={styles.percussionCurriculum}>
      <div className={styles.percussionCurriculum__inner}>
        <div>
          <div>
            <h3 className={styles.percussionCurriculum__title}>
              우리는 5단계 커리큘럼을 가지고 있어요.
            </h3>
            <div className={styles.percussionCurriculum__stepContainer}>
              {curriculum.map((step, index) => (
                <div className={styles.percussionCurriculum__step} key={index}>
                  <div className={styles.percussionCurriculum__step__card}>
                    <div className={styles.percussionCurriculum__step__level}>
                      {step.step}
                    </div>
                    <div>
                      <h4 className={styles.percussionCurriculum__step__title}>
                        {step.title}
                      </h4>
                      <p className={styles.percussionCurriculum__step__desc}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className={styles.percussionCurriculum__imgContainer}>
                {picture.map((item, index) => (
                  <div key={index}>
                    <img src={item.src} />
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className={styles.percussionCurriculum__move}>
                <button
                  onClick={() => navigate('/dreamus-gallery/kungchita')}
                  className={styles.percussionCurriculum__move__btn}
                >
                  <span>사진 더 보기</span>
                  <RightArrow
                    className={styles.percussionCurriculum__move__icon}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PercussionCurriculum
