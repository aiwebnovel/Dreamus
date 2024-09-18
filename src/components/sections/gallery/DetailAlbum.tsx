import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'

import styles from '@components/sections/gallery/DetailAlbum.module.scss'

import Back from '@assets/icon/back.svg?react'

interface DetailAlbum {
  id: string
  title: string
  category: string
  description: string
  content: string
  createdAt: string
  imageUrls?: string[]
}

function DetailAlbum() {
  const { albumId } = useParams<{ albumId: string }>()
  const [album, setAlbum] = useState<DetailAlbum | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // 백엔드
    setIsLoading(true)
    fetch(`http://localhost:3001/albums/${albumId}`)
      .then((res) => res.json())
      .then((data: DetailAlbum) => {
        setAlbum(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching album:', error)
        setIsLoading(false)
      })
  }, [albumId])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!album) {
    return <div>Album not found</div>
  }

  const sanitizedContent = DOMPurify.sanitize(album.content, {
    USE_PROFILES: { html: true },
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'], // iframe에 필요한 속성 허용
  })
  return (
    <section className={styles.detail}>
      <div className={styles.detail__inner}>
        <div className={styles.detail__container}>
          <div className={styles.detail__back}>
            <button
              onClick={() => {
                navigate(-1)
              }}
              className={styles.detail__back__btn}
            >
              <Back className={styles.detail__back__btn__icon} />
            </button>
          </div>
          <div className={styles.detail__text}>
            <h1 className={styles.detail__text__title}>{album.title}</h1>
            <div className={styles.detail__text__desc}>
              <p className={styles.detail__text__desc__category}>
                {album.category}
              </p>
              <p className={styles.detail__text__desc__date}>
                {album.createdAt}
              </p>
            </div>
          </div>
          <div className={styles.detail__contentWrap}>
            <div
              className={styles.detail__contentWrap__content}
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          </div>
          {/* <div>
            <button>수정하기</button>
            <button>삭제하기</button>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default DetailAlbum
