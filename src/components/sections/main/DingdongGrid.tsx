import secondKid from '@assets/image/thinkKid.webp'
import firstKid from '@assets/image/youtubeKid.webp'
import thirdKid from '@assets/image/frustratedKid.webp'

import styles from '@components/sections/main/DingdongGrid.module.scss'

function DingdongGrid() {
  return (
    <section className={styles.grid}>
      <div className={styles.grid__inner}>
        <div className={styles.grid__container}>
          <div className={styles.grid__container__text}>
            <p className={styles.grid__container__text__desc}>
              <p className={styles.grid__emphasize3}>
                {' '}
                총명한 우리 아이, <br />
                유튜브만 보고 있나요?
              </p>
              <br />
              화면 속에서 아이의 총명함이 흐려질까 봐 걱정되시나요?
              <br />
              현대 사회는 화면과 우리 아이를 떼어 놓기 어렵지요.
              <br />
            </p>
            <p className={styles.grid__container__text__desc}>
              <p className={styles.grid__emphasize}>
                그러나 괜찮습니다.
                <br />
                유튜브를 보면서도 스스로 무언가를 생각할 수 있다면요.{' '}
              </p>
              <span>열 가지로 생각하자!</span>
              <span className={styles.grid__emphasize2}> 생각놀이터 띵동</span>
            </p>
          </div>
          <div className={styles.grid__container__imgBox}>
            <img
              className={styles.grid__container__imgBox__img}
              alt="유튜브만 보는 아이"
              src={firstKid}
            />
          </div>
          <div className={styles.grid__container2}>
            <div className={styles.grid__container__imgs}>
              <img
                className={styles.grid__container__imgBox__img}
                alt="작은일에 쉽게 좌절하는 아이"
                src={secondKid}
              />
            </div>
          </div>
          <div className={styles.grid__container1}>
            <div className={styles.grid__container__text}>
              <p className={styles.grid__container__text__desc}>
                <p className={styles.grid__emphasize3}>
                  {' '}
                  똑똑한 우리 아이, <br />
                  자신의 생각을 표현하지 못하나요?
                </p>
                <br />
                <span className={styles.grid__emphasize}>
                  AI 시대, 자신의 목소리를 내지 못하는 아이는 뒤처지기 쉽습니다.
                  <br />
                  아이의 그 깊은 생각을 꺼내어 표현할 수 있는 힘을 길러주세요!
                </span>
                <br />- 자존감을 높이자!
                <span className={styles.grid__emphasize2}>
                  {' '}
                  생각놀이터 띵동
                </span>
              </p>
            </div>
          </div>
          <div className={styles.grid__container__text}>
            <p className={styles.grid__container__text__desc}>
              <p className={styles.grid__emphasize3}>
                착하고 여린 우리 아이, <br />
                작은 일에도 쉽게 좌절하나요?
              </p>
              <br />
              더 크면 괜찮겠지. 아닙니다.
              <br />
              같은 상황이라면, 커갈수록 좌절의 빈도도 늘어납니다.
              <br />
            </p>
            <p className={styles.grid__container__text__desc}>
              <span className={styles.grid__emphasize}>
                아이에게는 반드시 단단한 마음이 필요합니다.
                <br />
                어린 시절에 자라난 마음의 근육, 아이의 미래를 좌우합니다.
              </span>
              <br />- 마음근육 튼튼하자!
              <span className={styles.grid__emphasize2}> 생각놀이터 띵동</span>
            </p>
          </div>
          <div className={styles.grid__container__imgBox}>
            <img
              className={styles.grid__container__imgBox__img}
              alt="내 생각을 제대로 말 못하는 아이"
              src={thirdKid}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DingdongGrid
