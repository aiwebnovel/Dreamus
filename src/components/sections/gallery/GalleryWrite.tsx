import Editor from '@components/features/Editor'
import styles from '@components/sections/gallery/GalleryWrite.module.scss'

function GalleryWrite() {
  return (
    <section className={styles.write}>
      <div className={styles.write__inner}>
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
