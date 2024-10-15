import styles from '@components/sections/realization/DrumNantaJanggu/PercussionIntroduce.module.scss'

import drum from '@assets/image/drum.jpg'
import janggu from '@assets/image/janggu.jpg'
import nanta from '@assets/image/nanta.jpg'

const percussion = [
  {
    name: '드럼',
    desc: '다양한 음악을 연주하며 성취감을 느끼고 스트레스 해소까지!',
    src: drum,
    tag: ['리듬 감각 향상', '신체 발달', '감정 표현'],
  },
  {
    name: '난타',
    desc: '연주하며 스트레스를 해소하고 하나된 퍼포먼스로 우리를 표현합니다.',
    src: nanta,
    tag: ['협동심', '문화 이해', '스트레스 해소'],
  },
  {
    name: '장구',
    desc: '민속음악에서 사용되는 타악기로 양면을 두드려 소리를 냅니다.',
    src: janggu,
    tag: ['문화 이해', '정서적 안정', '리듬 감각 향상'],
  },
]

function PercussionIntroduce() {
  return (
    <section className={styles.percussion}>
      <div className={styles.percussion__inner}>
        <div>
          <div>
            <h2 className={styles.percussion__title}>
              <span className={styles.percussion__title__sub}>쿵.치.타</span>
              <span>드럼. 난타. 장구</span>
            </h2>
            <p className={styles.percussion__desc}>
              씽씽큐 뮤직의 <span>씽~</span>명나는 타악기 프로그램
            </p>
            <p className={styles.percussion__desc}>
              Dreamus만에 차별화된 교육 프로그램을 만나보세요.
            </p>
          </div>
          <div className={styles.percussion__introduce}>
            <h3 className={styles.percussion__introduce__title}>
              우리는 이런 악기를 사용해요.
            </h3>
            <div className={styles.percussion__introduce__container}>
              {percussion.map((item, index) => (
                <div className={styles.percussion__card} key={index}>
                  <div className={styles.percussion__card__content}>
                    <img src={item.src} />
                    <div className={styles.percussion__card__text}>
                      <h4 className={styles.percussion__card__title}>
                        {item.name}
                      </h4>
                      <p className={styles.percussion__card__desc}>
                        {item.desc}
                      </p>
                      <p className={styles.percussion__card__tag}>
                        {item.tag.map((tag, index) => (
                          <span key={index}>#{tag}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PercussionIntroduce
