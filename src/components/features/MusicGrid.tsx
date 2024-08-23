import styles from '@components/features/MusicGrid.module.scss'

interface MusicGridProps {
  logoUrl: string
  title: string
  firstDesc: string
  secondDesc: string[]
  img: string[]
}

function MusicGrid({
  logoUrl,
  title,
  firstDesc,
  secondDesc,
  img,
}: MusicGridProps) {
  return (
    <div className={styles.musicGrid}>
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
    </div>
  )
}

export default MusicGrid
