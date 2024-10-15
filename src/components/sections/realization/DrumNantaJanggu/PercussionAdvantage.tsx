import { useNavigate } from 'react-router-dom'

import styles from '@components/sections/realization/DrumNantaJanggu/PercussionAdvantage.module.scss'

import CircleCheck from '@assets/icon/circleCheck.svg?react'

const educationalBenefits = [
  {
    title: '신체 발달',
    desc: ' 타악기는 손과 발을 동시에 사용하게 하여 대근육과 소근육 발달에 도움을 줍니다.',
  },
  {
    title: '사회성 증진',
    desc: '그룹으로 연주하면서 협동심과 소통 능력을 키울 수 있습니다.',
  },
  {
    title: '정서 발달',
    desc: '음악을 통해 감정을 표현하고 스트레스를 해소하는 데 도움을 줍니다.',
  },
  {
    title: '사회성 발달',
    desc: '친구들과 같이 만들어내는 음악! 함께라서 가능한 성취감은 사회성 발달을 도모합니다.',
  },
  {
    title: '사회성 발달',
    desc: '친구들과 같이 만들어내는 음악! 함께라서 가능한 성취감은 사회성 발달을 도모합니다.',
  },
  {
    title: '자신감 증진',
    desc: '연주를 통해 성취감을 느끼고 자기 표현의 기회를 가짐으로써 자신감이 높아집니다.',
  },
]

function PercussionAdvantage() {
  // const navigate = useNavigate()

  return (
    <section className={styles.advantage}>
      <div className={styles.advantage__inner}>
        <div>
          <div>
            <h3 className={styles.advantage__title}>
              씽씽큐 타악기 수업! 이래서 좋아요.
            </h3>
            <div className={styles.advantage__benefit}>
              {educationalBenefits.map((benefit, index) => (
                <div className={styles.advantage__benefit__card} key={index}>
                  <CircleCheck className={styles.advantage__benefit__icon} />
                  <div>
                    <h4 className={styles.advantage__benefit__title}>
                      {benefit.title}
                    </h4>
                    <p className={styles.advantage__benefit__desc}>
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className={styles.advantage__move}>
            <button onClick={() => navigate('/class-registration')}>
              수업 신청하기
            </button>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default PercussionAdvantage
