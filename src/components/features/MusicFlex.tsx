import styles from '@components/features/MusicFlex.module.scss'

interface MusicFelxProps {
  logoUrl: string
  title: string
  firstDesc: string
  secondDesc: string[]
  img: string[]
  isReverse?: boolean
}

function MusicFlex({
  logoUrl,
  title,
  firstDesc,
  secondDesc,
  img,
  isReverse,
}: MusicFelxProps) {
  return (
    <div className={styles.flex}>
      <div
        className={
          isReverse ? `${styles.flex__row__reverse}` : `${styles.flex__row}`
        }
      >
        <div className={styles.flex__row__item}>
          <img className={styles.flex__logo} src={logoUrl} />
        </div>
        <div className={styles.flex__row__item}>
          <div className={styles.flex__titleContainer}>
            <h2 className={styles.flex__titleContainer__title}>{title}</h2>
            <p className={styles.flex__titleContainer__desc}>{firstDesc}</p>
          </div>
        </div>
      </div>
      <div
        className={
          isReverse ? `${styles.flex__row__reverse}` : `${styles.flex__row}`
        }
      >
        <div className={styles.flex__row__item}>
          <div className={styles.flex__descContainer}>
            {secondDesc.map((desc, index) => (
              <p className={styles.flex__descContainer__item} key={index}>
                {desc}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.flex__row__item}>
          <img
            className={
              isReverse
                ? `${styles.flex__reverse__firstImg}`
                : `${styles.flex__firstImg}`
            }
            src={img[0]}
          />
          <img
            className={
              isReverse
                ? `${styles.flex__reverse__secondImg}`
                : `${styles.flex__secondImg}`
            }
            src={img[1]}
          />
          <img
            className={
              isReverse
                ? `${styles.flex__reverse__thirdImg}`
                : `${styles.flex__thirdImg}`
            }
            src={img[2]}
          />
          <img
            className={
              isReverse
                ? `${styles.flex__reverse__fourthImg}`
                : `${styles.flex__fourthImg}`
            }
            src={img[3]}
          />
        </div>
      </div>
    </div>
  )
}

export default MusicFlex
