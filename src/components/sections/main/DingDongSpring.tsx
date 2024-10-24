import { motion } from 'framer-motion'

import styles from '@components/sections/main/DingDongSpring.module.scss'
import { useNavigate } from 'react-router-dom'

import espa from '@assets/image/espa.png'

const item = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

function DingDongSpring() {
  const navigate = useNavigate()
  return (
    <section className={styles.spring}>
      <div className={styles.spring__inner}>
        <motion.div
          initial="hideen"
          animate="visible"
          variants={item}
          className={styles.spring__container}
        >
          {/* <div className={styles.spring__img}>
            <div className={styles.spring__img__box}>
              <img
                alt="스프링에 갖혀 있는 아이"
                className={styles.spring__img__spring}
                src={springin}
              />
              <span className={styles.spring__img__springIn}>
                {`용수철안에 갖혀
                우울한 우리아이`}
              </span>
            </div>
            <div className={styles.spring__img__box}>
              <img
                alt="스프링을 점프하는 아이"
                className={styles.spring__img__spring}
                src={springOut}
              />
              <span className={styles.spring__img__springOut}>
                {`용수철을 밟고
                점프하는 우리아이`}
              </span>
            </div>
          </div> */}
          <div className={styles.spring__text}>
            <p className={styles.spring__text__main}>
              지금 우리 아이의 <span>회복탄력성을</span> <br />
              테스트해보세요.
              <br />
              <br />
              동화 캐릭터로 보는 <br />
              유아회복탄력성 테스트
            </p>
            <div className={styles.spring__btnContainer}>
              <button
                onClick={() => navigate('/assessment')}
                className={styles.spring__btnContainer__btn}
              >
                ESPA 바로가기
              </button>
            </div>
            <img src={espa} width={'100%'} />
            {/* <p className={styles.spring__text__main}>
              화면 속에서 아이의 총명함이 흐려질까 봐 걱정되시나요?
              <br />
              현대 사회는 화면과 우리 아이를 떼어 놓기 어렵지요. <br />
            </p>
            <p className={styles.spring__text__main}>
              <p className={styles.spring__text__sub}>
                그러나 괜찮습니다. <br />
                유튜브를 보면서도 스스로 무언가를 생각할 수 있다면요. <br />
              </p>
            </p>
            <p className={styles.spring__text__main}>
              –열 가지로 생각하자! 생각놀이터 띵동 <br />
              <br />
            </p>
            <p className={styles.spring__text__main}>
              2. 똑똑한 우리 아이, 자신의 생각을 표현하지 못하나요?
            </p>
            <img src={springin} className={styles.spring__img} />
            <p className={styles.spring__text__main}>
              <p className={styles.spring__text__sub}>
                AI 시대, 자신의 목소리를 내지 못하는 아이는 뒤처지기 쉽습니다.
                <br />
                아이의 그 깊은 생각을 꺼내어 표현할 수 있는 힘을 길러주세요!
                <br />
              </p>
            </p>
            <p className={styles.spring__text__main}>
              자존감을 높이자! 생각놀이터 띵동 <br />
              <br />
            </p>

            <p className={styles.spring__text__main}>
              3. 착하고 여린 우리 아이, 작은 일에도 쉽게 좌절하나요?
            </p>
            <img src={springin} className={styles.spring__img} />
            <p className={styles.spring__text__main}>
              더 크면 괜찮겠지. 아닙니다. <br />
              같은 상황이라면, 커갈수록 좌절의 빈도도 늘어납니다.
              <br />
            </p>
            <p className={styles.spring__text__main}>
              <p className={styles.spring__text__sub}>
                아이에게는 반드시 단단한 마음이 필요합니다.
                <br />
                어린 시절에 자라난 마음의 근육, 아이의 미래를 좌우합니다.
              </p>
            </p>
            <p className={styles.spring__text__main}>
              - 마음근육 튼튼하자! 생각놀이터 띵동
              <br />
              <br />
            </p> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DingDongSpring
