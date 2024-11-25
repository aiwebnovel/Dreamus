import React, { useState } from 'react'
import Editor from '@components/features/Editor'
import styles from '@components/sections/gallery/GalleryWrite.module.scss'
import { useNavigate } from 'react-router-dom'

const categories = [
  '씽씽큐 뮤직',
  '룰루랄라 피아노',
  '쿵!치!타 드럼,난타,장구',
  '생각놀이터 띵동',
  '꿈노리 별노리',
] as const

type Category = (typeof categories)[number]

function GalleryWrite() {
  const [category, setCategory] = useState<Category | ''>('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editorContent, setEditorContent] = useState('')
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const navigate = useNavigate()

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(`${API_BASE_URL}/app/upload-image`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        console.error('Failed to upload image:', response.statusText)
        return null
      }

      const responseData = await response.json()
      if (!responseData.data) {
        console.error('Server did not return a valid URL')
        return null
      }

      return responseData.data
    } catch (error) {
      console.error('Error uploading image:', error)
      return null
    }
  }

  const replaceBase64ImagesWithUrls = async (
    content: string,
  ): Promise<{ content: string; imageUrls: string[] }> => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/html')
    const imgTags = doc.getElementsByTagName('img')
    const newImageUrls: Set<string> = new Set(imageUrls) // 기존 이미지 URL 포함

    for (let img of imgTags) {
      const src = img.src

      // 이미 업로드된 URL이라면 건너뜀
      if (!src.startsWith('data:') || newImageUrls.has(src)) {
        continue
      }

      try {
        const blob = await fetch(src).then((res) => res.blob())
        const file = new File([blob], 'image.jpg', { type: blob.type })
        const uploadedUrl = await uploadImage(file)

        if (uploadedUrl) {
          img.src = uploadedUrl
          newImageUrls.add(uploadedUrl) // 새 URL 추가
        }
      } catch (error) {
        console.error('Error replacing image:', error)
      }
    }

    return { content: doc.body.innerHTML, imageUrls: Array.from(newImageUrls) }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('Editor content before processing:', editorContent) // 디버깅

    // Base64 이미지 처리 후 새 콘텐츠와 이미지 URL 반환
    const { content, imageUrls: newImageUrls } =
      await replaceBase64ImagesWithUrls(editorContent)

    setImageUrls(newImageUrls) // 기존 이미지 URL에 새로운 URL 누적

    if (!newImageUrls.every((url) => typeof url === 'string')) {
      alert('이미지 URL이 유효하지 않습니다.')
      return
    }

    const postData = {
      title,
      category,
      description,
      content,
      imageUrls: newImageUrls,
    }

    console.log('Final payload:', postData) // 최종 데이터 확인

    try {
      const response = await fetch(`${API_BASE_URL}/albums`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })

      if (response.ok) {
        const responseData = await response.json()
        navigate(`/dreamus-gallery/${category}/${responseData.id}`)
      } else {
        console.error('Failed to create album')
      }
    } catch (error) {
      console.error('Error creating album:', error)
    }
  }

  return (
    <section className={styles.write}>
      <div className={styles.write__inner}>
        <form className={styles.write__form} onSubmit={onSubmit}>
          <div className={styles.write__form__titleContainer}>
            <div className={styles.write__form__titleBox}>
              <input
                className={styles.write__form__titleInput}
                type="text"
                id="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="title" className={styles.write__form__label}>
                제목을 입력하세요.
              </label>
              <div className={styles.write__form__underline}></div>
            </div>
            <div className={styles.write__form__titleBox}>
              <input
                className={styles.write__form__titleInput}
                type="text"
                id="desc"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="desc" className={styles.write__form__label}>
                블로그 글에 대한 간단한 설명을 입력하세요.
              </label>
              <div className={styles.write__form__underline}></div>
            </div>
            <div className={styles.write__form__categoryContainer}>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                required
                className={styles.write__form__categorySelect}
              >
                <option value="">카테고리 선택</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Editor
            onChange={(newContent) => setEditorContent(newContent)}
            content={editorContent}
          />
          <div className={styles.write__form__submit}>
            <button type="submit" className={styles.write__form__submit__btn}>
              게시하기
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default GalleryWrite
