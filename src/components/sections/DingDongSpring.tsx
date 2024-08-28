import { motion } from 'framer-motion'

import springin from '@assets/image/springIn.png'
import springOut from '@assets/image/springOut.png'

import styles from '@components/sections/DingDongSpring.module.scss'

const item = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

function DingDongSpring() {
  return (
    <section className={styles.spring}>
      <div className={styles.spring__inner}>
        <motion.div
          initial="hideen"
          animate="visible"
          variants={item}
          className={styles.spring__container}
        >
          <div className={styles.spring__img}>
            <div className={styles.spring__img__box}>
              <img
                alt="스프링에 갖혀 있는 아이"
                className={styles.spring__img__spring}
                src={springin}
              />
              <span className={styles.spring__img__springIn}>
                용수철안에 갖혀 우울한 우리아이
              </span>
            </div>
            <div className={styles.spring__img__box}>
              <img
                alt="스프링을 점프하는 아이"
                className={styles.spring__img__spring}
                src={springOut}
              />
              <span className={styles.spring__img__springOut}>
                용수철을 밟고 점프하는 우리아이
              </span>
            </div>
          </div>
          <div className={styles.spring__text}>
            <p className={styles.spring__text__main}>우리 아이가</p>
            <p className={styles.spring__text__main}>
              <span className={styles.spring__text__sub}>커다란 용수철</span>을
              만난 경우,
            </p>
            <p className={styles.spring__text__main}>
              어떤 선택을 하길 바라시나요?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DingDongSpring
