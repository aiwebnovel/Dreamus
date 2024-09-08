import { useSearchParams } from 'react-router-dom'

import styles from '@components/features/PageNation.module.scss'

interface PageNationProps {
  totalItems: number
  itemCountPerPage: number
  pageCount: number
  currentPage: number
  onPageChange: (page: number) => void
}

function PageNation({
  totalItems,
  itemCountPerPage,
  pageCount,
  currentPage,
  onPageChange,
}: PageNationProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const totalPages = Math.ceil(totalItems / itemCountPerPage)
  const startPage = Math.max(1, currentPage - Math.floor(pageCount / 2))
  const endPage = Math.min(totalPages, startPage + pageCount - 1)

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    searchParams.set('page', page.toString())
    setSearchParams(searchParams)
    onPageChange(page)
  }

  return (
    <div className={styles.pageNation}>
      <ul className={styles.pageNation__list}>
        <li className={styles.pageNation__prevItem}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pageNation__prevItem__btn}
          >
            이전
          </button>
        </li>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i,
        ).map((page) => (
          <li key={page} className={styles.pageNation__item}>
            <button
              onClick={() => handlePageChange(page)}
              className={`${styles.pageNation__item__btn} ${
                page === currentPage ? styles.pageNation__item__btn_active : ''
              }`}
            >
              {page}
            </button>
          </li>
        ))}
        <li className={styles.pageNation__nextItem}>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.pageNation__nextItem__btn}
          >
            다음
          </button>
        </li>
      </ul>
    </div>
  )
}

export default PageNation
