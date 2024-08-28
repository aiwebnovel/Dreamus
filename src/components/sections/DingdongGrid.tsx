import titi from '@assets/image/titi.png'
import firstChild from '@assets/image/child1.png'
import secondChild from '@assets/image/child2.png'

import styles from '@components/sections/DingdongGrid.module.scss'

function DingdongGrid() {
  return (
    <section className={styles.grid}>
      <div className={styles.grid__inner}>
        <div className={styles.grid__container}>
          <div className={styles.grid__container__text}>
            <p className={styles.grid__container__text__desc}>
              소중한 우리아이의,
            </p>
            <p className={styles.grid__container__text__desc}>
              <span className={styles.grid__emphasize}>마음근력</span>
            </p>
            <p className={styles.grid__container__text__desc}>
              아무에게나 맡기실 건가요?
            </p>
          </div>
          <div className={styles.grid__container__imgBox}>
            <img
              className={styles.grid__container__imgBox__img}
              alt="티티 선생님과 아이들"
              src={titi}
            />
          </div>
          <div className={styles.grid__container__imgs}>
            <img
              className={styles.grid__container__firstImg}
              src={firstChild}
            />
            <img
              className={styles.grid__container__secondImg}
              src={secondChild}
            />
          </div>
          <div className={styles.grid__container__text}>
            <p className={styles.grid__container__text__desc}>
              놀이, 소통 전문가!{' '}
              <span className={styles.grid__emphasize}>티티선생님</span>
            </p>
            <p className={styles.grid__container__text__desc}>
              <span className={styles.grid__emphasize}>띵동!</span> 티티선생님이
              벨을 누르면
            </p>
            <p className={styles.grid__container__text__desc}>
              우리아이 마음 근육은 <br /> 단단해집니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DingdongGrid
