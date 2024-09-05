import { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import GalleryCard from '@components/common/GalleryCard'

import styles from '@components/sections/gallery/GalleryDreamus.module.scss'

interface Album {
  id: string
  title: string
  category: string
  imageUrl: string
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
  const navigate = useNavigate()
  const { category } = useParams<{ category: string }>()

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory)
    navigate(`/dreamus-gallery/${categoryMapping[newCategory]}`)
  }

  useEffect(() => {
    //백엔드 데이터 가져오기
    fetch('http://localhost:3001/albums')
      .then((res) => res.json())
      .then((res: Album[]) => {
        setAllAlbums(res)
        setFilteredAlbums(res)
      })
  }, [])

  useEffect(() => {
    if (selectedCategory === '전체') {
      setFilteredAlbums(allAlbums)
    } else {
      const filtered = allAlbums.filter(
        (album) => album.category === selectedCategory,
      )
      setFilteredAlbums(filtered)
    }
  }, [selectedCategory, allAlbums])

  useEffect(() => {
    if (category) {
      const koreanCategory = reverseCategoryMapping[category] || '전체'
      setSelectedCategory(koreanCategory)
    }
  }, [category])

  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__inner}>
        <div className={styles.gallery__container}>
          <div className={styles.gallery__textBox}>
            <h2 className={styles.gallery__textBox__title}>듣.보.드</h2>
            <p className={styles.gallery__textBox__desc}>듣고 보는 드림어스</p>
            <p className={styles.gallery__textBox__desc}>
              드림어스의 활동들을 만나보세요
            </p>
          </div>
          <div>
            {menuItems.map((item, index) => (
              <button
                onClick={() => handleCategoryChange(item)}
                key={index}
                style={{
                  fontWeight: selectedCategory === item ? 'bold' : 'normal',
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <div>
            {filteredAlbums.map((album, index) => (
              <GalleryCard
                id={album.id}
                category={album.category}
                key={index}
                title={album.title}
                imageUrl={album.imageUrl}
                description={album.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryDreamus
