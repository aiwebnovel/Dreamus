import { useEffect, useState, useRef } from 'react'

import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

import GalleryCard from '@components/common/GalleryCard'
import PageNation from '@components/features/PageNation'

import styles from '@components/sections/gallery/GalleryDreamus.module.scss'

interface Album {
  id: string
  title: string
  category: string
  imageUrls: string[]
  description: string
}

const categoryMapping: { [key: string]: string } = {
  전체: 'all',
  '씽씽큐 뮤직': 'singsing',
  '룰루랄라 피아노': 'lulurala',
  '쿵!치!타 드럼,난타,장구': 'kungchita',
  '생각놀이터 띵똥': 'thinkplay',
  '맘펴니 뮤직': 'mompenny',
}

const reverseCategoryMapping: { [key: string]: string } = Object.fromEntries(
  Object.entries(categoryMapping).map(([k, v]) => [v, k]),
)

const menuItems = Object.keys(categoryMapping)

function GalleryDreamus() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체')
  const [allAlbums, setAllAlbums] = useState<Album[]>([])
  const [filteredAlbums, setFilteredAlbums] = useState<Album[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const { category } = useParams<{ category: string }>()
  const sectionRef = useRef<HTMLElement>(null)

  const itemCountPerPage = 8

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    searchParams.set('page', page.toString())
    setSearchParams(searchParams)
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory)
    setCurrentPage(1)
    navigate(`/dreamus-gallery/${categoryMapping[newCategory]}`)
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    // 백엔드 데이터 가져오기
    setIsLoading(true)
    fetch('http://localhost:3001/albums')
      .then((res) => res.json())
      .then((res: Album[]) => {
        setAllAlbums(res.reverse())
        setFilteredAlbums(res)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching albums:', error)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1', 10)
    setCurrentPage(page)

    if (selectedCategory === '전체') {
      setFilteredAlbums(allAlbums)
    } else {
      const filtered = allAlbums.filter(
        (album) => album.category === selectedCategory,
      )
      setFilteredAlbums(filtered)
    }
  }, [selectedCategory, allAlbums, searchParams])

  useEffect(() => {
    if (category) {
      const koreanCategory = reverseCategoryMapping[category] || '전체'
      setSelectedCategory(koreanCategory)
    }
  }, [category])

  const currentAlbums = filteredAlbums.slice(
    (currentPage - 1) * itemCountPerPage,
    currentPage * itemCountPerPage,
  )

  return (
    <section ref={sectionRef} className={styles.gallery}>
      <div className={styles.gallery__inner}>
        <div className={styles.gallery__container}>
          <div className={styles.gallery__textBox}>
            <h2 className={styles.gallery__textBox__title}>듣.보.드</h2>
            <p className={styles.gallery__textBox__desc}>듣고 보는 드림어스</p>
            <p className={styles.gallery__textBox__desc}>
              드림어스의 활동들을 만나보세요
            </p>
          </div>
          <div className={styles.gallery__menuBtns}>
            {menuItems.map((item, index) => (
              <button
                onClick={() => handleCategoryChange(item)}
                key={index}
                style={{
                  fontWeight: selectedCategory === item ? 'bold' : 'normal',
                }}
                className={styles.gallery__menuBtns__btn}
              >
                <span>{item}</span>
              </button>
            ))}
          </div>
          {isLoading ? (
            <div className={styles.gallery__loading}>
              <p className={styles.gallery__loading__title}>로딩 중입니다.</p>
              <span className={styles.gallery__loading__subTitle}>
                잠시만 기다려주세요.
              </span>
            </div>
          ) : (
            <>
              {currentAlbums.length > 0 ? (
                <div className={styles.gallery__albums}>
                  {currentAlbums.map((album, index) => (
                    <GalleryCard
                      id={album.id}
                      category={album.category}
                      key={index}
                      title={album.title}
                      imageUrls={album.imageUrls}
                      description={album.description}
                    />
                  ))}
                </div>
              ) : (
                <div className={styles.gallery__noAlbums}>
                  <p className={styles.gallery__noAlbums__title}>
                    등록된 앨범이 없습니다.
                  </p>
                  <span className={styles.gallery__noAlbums__subTitle}>
                    앨범을 등록해 보세요!
                  </span>
                </div>
              )}

              {currentAlbums.length > 0 ? (
                <PageNation
                  totalItems={filteredAlbums.length}
                  itemCountPerPage={itemCountPerPage}
                  pageCount={5}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              ) : null}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default GalleryDreamus
