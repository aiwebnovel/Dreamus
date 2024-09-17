import React from 'react'
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
    if (str.length > 12) {
      return str.substring(0, 11) + '....'
    }
    return str
  }

  const defaultBackgroundStyle = {
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%',
  }

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/dreamus-gallery/${category}/${id}`)}
    >
      <div className={styles.card__imgBox}>
        {imageUrls?.length > 0 ? (
          <img
            className={styles.card__imgBox__img}
            src={imageUrls[0]}
            alt={title}
          />
        ) : (
          <div style={defaultBackgroundStyle} />
        )}
      </div>
      <div className={styles.card__textBox}>
        <h3 className={styles.card__textBox__title}>{title}</h3>
        <p className={styles.card__textBox__desc}>
          {stringRemove(description)}
        </p>
      </div>
    </div>
  )
}

export default GalleryCard

// import { useNavigate } from 'react-router-dom'

// import styles from '@components/common/GalleryCard.module.scss'

// interface GalleryCardCardProps {
//   id?: string
//   category?: string
//   title: string
//   imageUrl: string
//   description: string
// }

// function GalleryCard({
//   id,
//   category,
//   title,
//   imageUrl,
//   description,
// }: GalleryCardCardProps) {
//   const navigate = useNavigate()

//   const stringRemove = (str: string) => {
//     if (str.length > 12) {
//       return str.substring(0, 11) + '....'
//     }
//     return str
//   }

//   return (
//     <div
//       className={styles.card}
//       onClick={() => navigate(`/dreamus-gallery/${category}/${id}`)}
//     >
//       <div className={styles.card__imgBox}>
//         <img className={styles.card__imgBox__img} src={imageUrl} />
//       </div>
//       <div className={styles.card__textBox}>
//         <h3 className={styles.card__textBox__title}>{title}</h3>
//         <p className={styles.card__textBox__desc}>
//           {stringRemove(description)}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default GalleryCard
