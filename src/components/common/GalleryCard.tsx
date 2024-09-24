import { useNavigate } from 'react-router-dom'

import styles from '@components/common/GalleryCard.module.scss'

interface GalleryCardProps {
  id: string
  category: string
  title: string
  imageUrls: string[]
  description: string
}

function GalleryCard({
  id,
  category,
  title,
  imageUrls,
  description,
}: GalleryCardProps) {
  const navigate = useNavigate()

  const stringRemove = (str: string) => {
    if (str.length > 15) {
      return str.substring(0, 14) + '....'
    }
    return str
  }

  const handleNavigation = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate(`/dreamus-gallery/${category}/${id}`)
  }

  const handleReadMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    handleNavigation(e)
  }

  return (
    <div className={styles.card} onClick={handleNavigation}>
      <div className={styles.card__imgBox}>
        {imageUrls?.length > 0 ? (
          <img
            className={styles.card__imgBox__img}
            src={imageUrls[0]}
            alt={title}
          />
        ) : (
          <div className={styles.card__imgBox__noImg}>
            <span>이미지가 없습니다.</span>
          </div>
        )}
      </div>
      <div className={styles.card__textBox}>
        <h3 className={styles.card__textBox__title}>{title}</h3>
        <p className={styles.card__textBox__desc}>
          {stringRemove(description)}
        </p>
        <button
          className={styles.card__move}
          type="button"
          onClick={handleReadMore}
        >
          읽어보기
        </button>
      </div>
    </div>
  )
}

export default GalleryCard
