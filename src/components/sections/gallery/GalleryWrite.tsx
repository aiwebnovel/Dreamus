import React, { useState, useEffect } from 'react'
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

  const formatDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `작성일: ${year}년 ${month}월 ${day}일`
  }

  useEffect(() => {
    const extractImageUrls = (content: string): string[] => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(content, 'text/html')
      const imgTags = doc.getElementsByTagName('img')
      return Array.from(imgTags).map((img) => img.src)
    }

    const urls = extractImageUrls(editorContent)
    setImageUrls(urls)
  }, [editorContent])

  const uploadImageToS3 = async (imageUrl: string): Promise<string | null> => {
    try {
      // Pre-signed URL 요청
      const response = await fetch(`${API_BASE_URL}/app/presigned-url`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName: imageUrl, expiresIn: 180 }),
      })

      if (!response.ok) {
        console.error('Failed to generate presigned URL:', response.statusText)
        return null
      }

      // 응답을 텍스트로 받아서 presignedUrl로 사용
      const presignedUrl = await response.text()

      // Pre-signed URL을 통해 S3에 이미지 업로드
      const uploadResponse = await fetch(presignedUrl, {
        method: 'PUT',
        body: await fetch(imageUrl).then((res) => res.blob()),
      })

      if (!uploadResponse.ok) {
        console.error('Failed to upload to S3:', uploadResponse.statusText)
        return null
      }

      // presignedUrl을 통해 업로드된 S3 URL 반환
      return presignedUrl.split('?')[0] // URL의 쿼리 문자열 제거
    } catch (error) {
      console.error('Error in uploadImageToS3:', error)
      return null
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const createdAt = formatDate(new Date())

    // 이미지 업로드 후 성공한 URL만 필터링하여 `imageUrls`에 포함
    const s3Urls = (await Promise.all(imageUrls.map(uploadImageToS3))).filter(
      (url): url is string => url !== null,
    )

    const postData = {
      title,
      category,
      description,
      content: editorContent,
      imageUrls: s3Urls, // 성공한 URL만 포함
      createdAt,
    }

    try {
      const response = await fetch(`${API_BASE_URL}/albums`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })

      if (response.ok) {
        // 서버로부터 생성된 앨범 데이터를 받아옴
        const responseData = await response.json()
        const newId = responseData._id || responseData.id // 생성된 앨범의 ID를 받아서 저장

        console.log('앨범이 성공적으로 생성되었습니다.', newId)

        // 생성된 앨범 ID로 상세 페이지로 이동
        navigate(`/dreamus-gallery/${category}/${newId}`)

        // 입력 필드 초기화
        setTitle('')
        setDescription('')
        setCategory('')
        setEditorContent('')
        setImageUrls([])
      } else {
        console.error('앨범 생성에 실패했습니다.')
      }
    } catch (error) {
      console.error('앨범 생성 중 오류 발생:', error)
    }
  }

  return (
    <section className={styles.write}>
      <div className={styles.write__inner}>
        <div>
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
      </div>
    </section>
  )
}

export default GalleryWrite
