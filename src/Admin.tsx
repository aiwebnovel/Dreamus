import React, { useState } from 'react'
import { ref, set } from 'firebase/database'
import { database } from '@/firebaseConfig'
import styles from '@/Admin.module.scss'

const Admin: React.FC = () => {
  const [password, setPassword] = useState<string>('')
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [imageFile, setImageFile] = useState<File | null>(null)

  const ADMIN_PASSWORD = '1234' // 🔑 원하는 비밀번호로 변경하세요

  // 비밀번호 입력 처리
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  // 로그인 처리
  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      alert('관리자 페이지에 접속하였습니다!')
    } else {
      alert('비밀번호가 틀렸습니다. 다시 시도해주세요.')
    }
  }

  // 이미지 선택 처리
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
    }
  }

  // 공지사항 저장 처리
  const handleSaveNotice = async () => {
    if (!imageFile) {
      alert('이미지를 선택해주세요.')
      return
    }

    const reader = new FileReader()
    reader.readAsDataURL(imageFile)

    reader.onload = async () => {
      const base64Image = reader.result

      // ✅ Firebase Realtime Database에 Base64 이미지 저장
      await set(ref(database, 'noticeImage'), {
        imageUrl: base64Image,
      })

      alert('이미지가 업로드되었습니다!')
    }

    reader.onerror = (error) => {
      console.error('파일 읽기 오류:', error)
    }
  }

  return (
    <div className={styles.adminContainer}>
      {!isAuthenticated ? (
        <div className={styles.loginBox}>
          <h1>관리자 로그인</h1>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호를 입력하세요"
          />
          <button onClick={handleLogin}>로그인</button>
        </div>
      ) : (
        <div className={styles.noticeBox}>
          <h1>공지사항 관리 페이지</h1>
          <input
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleImageChange}
          />
          <button onClick={handleSaveNotice}>공지사항 저장</button>
        </div>
      )}
    </div>
  )
}

export default Admin
