import { useState } from 'react'
import axios from 'axios'
import emailjs from 'emailjs-com' // EmailJS 라이브러리 import

import FormTextField from '@components/features/FormTextField'
import jobNotice from '@assets/image/JobNotice.png'
import Teacher from '@assets/icon/teacher.svg?react'
import styles from '@components/sections/work-together/JobNotice.module.scss'

interface FormData {
  name: string
  age: string
  contact: string
  location: string
  resume: File | null
}

function JobNotice() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    contact: '',
    location: '',
    resume: null,
  })

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  const handleInputChange = (name: string, value: string | File | null) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // 파일을 S3에 업로드하는 함수
  const uploadFileToS3 = async (file: File): Promise<string | null> => {
    try {
      // 1. presigned URL 요청
      const presignedResponse = await axios.post(
        `${API_BASE_URL}/app/presigned-url`,
        {
          fileName: file.name,
          expiresIn: 180,
        },
      )

      const presignedUrl = presignedResponse.data // S3에 접근할 presigned URL

      // 2. presigned URL을 사용하여 파일 업로드
      await axios.put(presignedUrl, file, {
        headers: {
          'Content-Type': file.type,
        },
      })

      // S3에 업로드된 파일 URL 반환
      return presignedUrl.split('?')[0] // 쿼리 스트링 제거
    } catch (error) {
      console.error('파일 업로드 실패:', error)
      return null
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    let resumeUrl = ''
    if (formData.resume) {
      // 파일을 S3에 업로드
      const uploadedUrl = await uploadFileToS3(formData.resume)
      if (uploadedUrl) {
        resumeUrl = uploadedUrl
      } else {
        alert('파일 업로드에 실패했습니다. 다시 시도해주세요.')
        return
      }
    }

    // EmailJS를 통해 이메일 전송
    const templateParams = {
      name: formData.name,
      age: formData.age,
      contact: formData.contact,
      location: formData.location,
      resume: resumeUrl, // 업로드된 S3 파일 URL
    }

    try {
      const serviceID = 'service_9x6os8b' // 제공된 Service ID
      const templateID = 'template_cobmnp9' // 제공된 Template ID
      const userID = '5PUIiaSdlQ6tflkch' // 제공된 User ID

      await emailjs.send(serviceID, templateID, templateParams, userID)
      alert('지원서가 성공적으로 제출되었습니다!')
    } catch (error) {
      console.error('이메일 전송 실패:', error)
      alert('지원서 제출 중 문제가 발생했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <section className={styles.job}>
      <div className={styles.job__inner}>
        <div>
          <div className={styles.job__desc}>
            <div className={styles.job__titleContainer}>
              <Teacher className={styles.job__titleContainer__logo} />
              <h1 className={styles.job__titleContainer__title}>
                함께 일해요.
              </h1>
            </div>
            <p className={styles.job__desc__text}>
              {`아이를 보면 웃음이 절로 나오시나요? 가끔은 혀가 짧아지기도 하시나요? 그렇다면 Dreamus에 합류하세요. 아이를 사랑하는 마음. 그 마음 하나라면 당신은 이미 충분합니다. Dreamus와 함께 아이의 마음성장을 도와주세요.`}
            </p>
          </div>
          <div className={styles.job__notice}>
            <div className={styles.job__info}>
              <img className={styles.job__info__img} src={jobNotice} />
            </div>
            <div className={styles.job__apply}>
              <h2 className={styles.job__apply__title}>교사 신청하기</h2>
              <div className={styles.job__formContainer}>
                <form
                  onSubmit={handleSubmit}
                  className={styles.job__apply__form}
                >
                  <FormTextField
                    label="이름"
                    name="name"
                    type="text"
                    placeholder="성함을 입력해주세요."
                    onChange={handleInputChange}
                    value={formData.name}
                  />
                  <FormTextField
                    label="나이"
                    name="age"
                    type="text"
                    placeholder="나이를 입력해주세요."
                    onChange={handleInputChange}
                    value={formData.age}
                  />
                  <FormTextField
                    label="연락처"
                    name="contact"
                    type="text"
                    placeholder="`-`없이 연락처를 입력해주세요."
                    onChange={handleInputChange}
                    value={formData.contact}
                  />
                  <FormTextField
                    label="지역"
                    name="location"
                    type="text"
                    placeholder="지역을 `구` 까지만 입력해주세요."
                    onChange={handleInputChange}
                    value={formData.location}
                  />
                  <FormTextField
                    label="이력서 첨부"
                    name="resume"
                    type="file"
                    placeholder="이력서 파일을 추가해주세요."
                    onChange={handleInputChange}
                  />
                  <div>
                    <button className={styles.job__apply__btn} type="submit">
                      지원하기
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobNotice
