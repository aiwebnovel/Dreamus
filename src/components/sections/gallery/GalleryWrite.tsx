import Editor from '@components/features/Editor'
import styles from '@components/sections/gallery/GalleryWrite.module.scss'
// import { useState } from 'react'

// const categories = [
//   '씽씽큐 뮤직',
//   '생각놀이터 띵동',
//   '룰루랄라 피아노',
//   '쿵.치.타 드럼난타.장구',
//   '맘펴니 뮤직',
// ]

function GalleryWrite() {
  // const [title, setTitle] = useState('')
  // const [category, setCategory] = useState('')
  // const [content, setContent] = useState('')

  return (
    <section className={styles.write}>
      <div className={styles.write__inner}>
        {/* 카테고리 */}
        <div>
          <form className={styles.write__form}>
            <div className={styles.write__form__titleContainer}>
              <div className={styles.write__form__titleBox}>
                <input
                  className={styles.write__form__titleInput}
                  type="text"
                  id="title"
                  required
                />
                <label htmlFor="title" className={styles.write__form__label}>
                  제목을 입력하세요.
                </label>
                <div className={styles.write__form__underline}></div>
              </div>
              {/* <div className={styles.write__form__categoryContainer}>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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
              </div> */}
            </div>
            <Editor />
            {/* 에디터 자리 */}
            <button type="submit">게시하기</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default GalleryWrite
