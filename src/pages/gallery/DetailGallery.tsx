import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'
import Layout from '@components/layout/Layout'

interface DetailAlbum {
  id: string
  title: string
  category: string
  description: string
  content: string
  createdAt: string
  imageUrls?: string[]
}

function DetailGallery() {
  const { albumId } = useParams<{ albumId: string }>()
  const [album, setAlbum] = useState<DetailAlbum | null>(null)
  const [isLoading, setIsLoading] = useState(true)

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
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    )
  }

  if (!album) {
    return (
      <Layout>
        <div>Album not found</div>
      </Layout>
    )
  }

  const sanitizedContent = DOMPurify.sanitize(album.content, {
    USE_PROFILES: { html: true },
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'], // iframe에 필요한 속성 허용
  })

  return (
    <Layout>
      <section>
        <h1>{album.title}</h1>
        <p>{album.category}</p>
        <p>{album.description}</p>
        <p>{album.createdAt}</p>
        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      </section>
    </Layout>
  )
}

export default DetailGallery
