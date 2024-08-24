import styles from '@components/features/MusicFlex.module.scss'

interface MusicFelxProps {
  logoUrl: string
  title: string
  firstDesc: string
  secondDesc: string[]
  img: string[]
  isReversed?: boolean
}

function MusicFlex({
  logoUrl,
  title,
  firstDesc,
  secondDesc,
  img,
  isReversed,
}: MusicFelxProps) {
  return (
    <div className={styles.flex}>
      <div className={styles.flex__row}>
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
      <div className={styles.flex__row}>
        <div className={styles.flex__row__item}>
          <div className={styles.flex__descContainer}>
            {secondDesc.map((desc, index) => (
              <p className={styles.flex__descContainer__item} key={index}>
                {desc}
              </p>
            ))}
          </div>
        </div>
        <div
          className={
            isReversed
              ? `${styles.flex__row__reverse}`
              : `${styles.flex__row__item}`
          }
        >
          <img
            className={
              isReversed
                ? `${styles.reverse__firstImg}`
                : `${styles.flex__firstImg}`
            }
            src={img[0]}
          />
          <img
            className={
              isReversed
                ? `${styles.reverse__secondImg}`
                : `${styles.flex__secondImg}`
            }
            src={img[1]}
          />
          <img
            className={
              isReversed
                ? `${styles.reverse__thirdImg}`
                : `${styles.flex__thirdImg}`
            }
            src={img[2]}
          />
          <img
            className={
              isReversed
                ? `${styles.reverse__fourthImg}`
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

{
  /* <div className={styles.musicGrid}>
<div className={`${styles.musicGrid__item}`}>
  <img
    className={styles.musicGrid__logoImg}
    alt="Thinking Logo"
    src={logoUrl}
  />
</div>
<div
  className={`${styles.musicGrid__item} ${styles.musicGrid__textContainer}`}
>
  <h2 className={styles.musicGrid__title}>{title}</h2>
  <p className={styles.musicGrid__firstDesc}>{firstDesc}</p>
</div>
<div
  className={`${styles.musicGrid__item} ${styles.musicGrid__paragraph}`}
>
  {secondDesc.map((desc, index) => (
    <p className={styles.musicGrid__secondDesc} key={index}>
      {desc}
    </p>
  ))}
</div>
<div
  className={`${styles.musicGrid__item} ${styles.musicGrid__imgContainer}`}
>
  <img
    className={styles.musicGrid__firstImg}
    alt="first child"
    src={img[0]}
  />
  <img
    className={styles.musicGrid__secondImg}
    alt="second child"
    src={img[1]}
  />
  <img
    className={styles.musicGrid__thirdImg}
    alt="third child"
    src={img[2]}
  />
  <img
    className={styles.musicGrid__fourthImg}
    alt="fourth child"
    src={img[3]}
  />
</div>
</div> */
}
