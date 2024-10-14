import styles from '@components/sections/realization/MomfanyMusic/MomfanyVideo.module.scss'

import star1 from '@assets/image/star1.png'
import star2 from '@assets/image/star2.png'
import star3 from '@assets/image/star3.png'
import star4 from '@assets/image/star4.png'
import star5 from '@assets/image/star5.png'
import star6 from '@assets/image/star6.png'

function MomfanyVideo() {
  return (
    <section className={styles.star}>
      <div className={styles.star__inner}>
        <div className={styles.star__container}>
          <p className={styles.star__title}>누구나, 별로 태어났습니다.</p>
          <p className={styles.star__desc}>
            그 별이 더 많이 체험하고 더 많이 꿈꾸도록
          </p>
          <div className={styles.star__imgContainer}>
            <img src={star1} width={'100%'} className={styles.star__img} />
            <img src={star2} width={'100%'} className={styles.star__img} />
            <img src={star3} width={'100%'} className={styles.star__img} />
            <img src={star4} width={'100%'} className={styles.star__img} />
            <img src={star5} width={'100%'} className={styles.star__img} />
            <img src={star6} width={'100%'} className={styles.star__img} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MomfanyVideo
