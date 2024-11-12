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
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const navigate = useNavigate()

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  const DELETE_PASSWORD = '123456' // 삭제 확인을 위한 비밀번호 (6글자)

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${API_BASE_URL}/albums?id=${albumId}`)
        if (!response.ok) {
          throw new Error('Album not found')
        }
        const data: DetailAlbum = await response.json()
        setAlbum(data)
      } catch (error) {
        console.error('Error fetching album:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (albumId) {
      fetchAlbum()
    }
  }, [albumId])

  // 비밀번호 확인 후 앨범 삭제
  const handleDelete = async () => {
    if (passwordInput !== DELETE_PASSWORD) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    try {
      const response = await fetch(`${API_BASE_URL}/albums?id=${albumId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        alert('앨범이 삭제되었습니다.')
        navigate('/dreamus-gallery')
      } else {
        console.error('Failed to delete album')
        alert('앨범 삭제에 실패했습니다.')
      }
    } catch (error) {
      console.error('Error deleting album:', error)
      alert('앨범 삭제 중 오류가 발생했습니다.')
    } finally {
      setShowPasswordModal(false) // 모달 닫기
    }
  }

  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate(-1)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!album) {
    return <div>Album not found</div>
  }

  const sanitizedContent = DOMPurify.sanitize(album.content, {
    USE_PROFILES: { html: true },
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'],
  })

  return (
    <section className={styles.detail}>
      <div className={styles.detail__inner}>
        <div className={styles.detail__container}>
          <div className={styles.detail__back}>
            <button onClick={handleBack} className={styles.detail__back__btn}>
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
          {album.imageUrls && album.imageUrls.length > 0 && (
            <div className={styles.detail__images}>
              {album.imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Album Image ${index + 1}`}
                  className={styles.detail__image}
                />
              ))}
            </div>
          )}
          <div className={styles.detail__actions}>
            <button
              onClick={() => setShowPasswordModal(true)}
              className={styles.detail__deleteBtn}
            >
              삭제하기
            </button>
          </div>
        </div>
      </div>

      {showPasswordModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>비밀번호 확인</h2>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              maxLength={6}
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button onClick={handleDelete} className={styles.modal__confirmBtn}>
              확인
            </button>
            <button
              onClick={() => setShowPasswordModal(false)}
              className={styles.modal__cancelBtn}
            >
              취소
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default DetailAlbum
