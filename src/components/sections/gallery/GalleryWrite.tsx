import React, { useState, useEffect } from 'react'
import Editor from '@components/features/Editor'
import styles from '@components/sections/gallery/GalleryWrite.module.scss'
import { useNavigate } from 'react-router-dom'

const categories = [
  '씽씽큐 뮤직',
  '생각놀이터 띵동',
  '룰루랄라 피아노',
  '쿵.치.타 드럼난타.장구',
  '맘펴니 뮤직',
] as const

type Category = (typeof categories)[number]

function GalleryWrite() {
  const [category, setCategory] = useState<Category | ''>('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editorContent, setEditorContent] = useState('')
  const [imageUrls, setImageUrls] = useState<string[]>([])

  const navigate = useNavigate()

  const formatDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return `작성일: ${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`
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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const createdAt = formatDate(new Date())
    const id = Date.now().toString()

    const postData = {
      id,
      title,
      category,
      description,
      content: editorContent,
      imageUrls,
      createdAt,
    }

    try {
      const response = await fetch('http://localhost:3001/albums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })

      if (response.ok) {
        console.log('앨범이 성공적으로 생성되었습니다.')
        console.log(response)
        setTitle('')
        setDescription('')
        setCategory('')
        setEditorContent('')
        setImageUrls([])
        navigate(`/dreamus-gallery/${category}/${id}`)
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
