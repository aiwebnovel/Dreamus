import Layout from '@components/layout/Layout'
import { ref, get } from 'firebase/database'
import { useEffect, useState } from 'react'
import NoticeModal from '@/components/sections/main/NoticeModal'
import { database } from '@/firebaseConfig'
import DingdongGrid from '@/components/sections/main/DingdongGrid'
import DingDongIntroduce from '@/components/sections/main/DingDongIntroduce'
import DingDongSpring from '@/components/sections/main/DingDongSpring'
import DingDongTest from '@/components/sections/main/DingDongTest'
import DingdongProgram from '@/components/sections/main/DingdongProgram'

function MainPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>('')

  // ✅ Firebase에서 Base64 이미지 가져오기
  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const snapshot = await get(ref(database, 'noticeImage'))
        if (snapshot.exists()) {
          const data = snapshot.val()
          const latestImageUrl = data.imageUrl

          // ✅ 로컬스토리지에서 마지막으로 본 이미지 URL 가져오기
          const lastSeenImageUrl = localStorage.getItem('lastSeenImageUrl')

          // ✅ 새로운 이미지가 업로드되었을 때만 팝업 표시
          if (latestImageUrl !== lastSeenImageUrl) {
            setImageUrl(latestImageUrl)
            setShowPopup(true)
          }
        }
      } catch (error) {
        console.error('이미지 가져오기 오류:', error)
      }
    }

    fetchImageUrl()
  }, [])

  // ✅ 모달 닫기
  const handleClosePopup = () => {
    setShowPopup(false)
  }

  // ✅ "다시 보지 않기" 버튼 클릭 시 로컬스토리지에 마지막으로 본 이미지 URL 저장
  const handleDontShowAgain = () => {
    localStorage.setItem('lastSeenImageUrl', imageUrl)
    setShowPopup(false)
  }

  return (
    <Layout>
      {showPopup && (
        <NoticeModal
          imageUrl={imageUrl}
          onClose={handleClosePopup}
          onDontShowAgain={handleDontShowAgain}
        />
      )}
      <DingdongGrid />
      <DingDongIntroduce />
      <DingDongSpring />
      <DingDongTest />
      <DingdongProgram />
    </Layout>
  )
}

export default MainPage
