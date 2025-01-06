import { useState } from 'react'
import axios from 'axios'
import emailjs from 'emailjs-com'

import FormTextField from '@components/features/FormTextField'
import jobNotice from '@assets/image/JobNotice.png'
import Teacher from '@assets/icon/teacher.svg?react'
import styles from '@components/sections/work-together/JobNotice.module.scss'

// Form 데이터 타입 정의
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

  // FormTextField의 onChange 핸들러
  const handleInputChange = (name: string, value: string | File | null) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const uploadFileToBackend = async (file: File): Promise<string | null> => {
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await axios.post(
        `${API_BASE_URL}/app/upload-image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      // 응답에서 파일 URL만 추출
      if (response.status === 201 && response.data?.data) {
        console.log('File uploaded successfully:', response.data.data)
        return response.data.data // 파일 URL 반환
      } else {
        console.error('File upload failed:', response.statusText)
        return null
      }
    } catch (error) {
      console.error('Error uploading file:', error)
      return null
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    let uploadedResumeUrl = ''
    if (formData.resume) {
      const url = await uploadFileToBackend(formData.resume)
      if (!url) {
        alert('파일 업로드에 실패했습니다. 다시 시도해주세요.')
        return
      }
      uploadedResumeUrl = url
    } else {
      alert('이력서 파일을 첨부해주세요.')
      return
    }

    // EmailJs 전송
    const templateParams = {
      name: formData.name,
      age: formData.age,
      contact: formData.contact,
      location: formData.location,
      resume_url: uploadedResumeUrl, // 올바른 URL 포함
    }

    console.log('templateParams to be sent to emailJs:', templateParams)

    try {
      const serviceID = 'service_35qhf55'
      const templateID = 'template_wtumhcd'
      const userID = 'rhAvZFF55IWi3omld'

      await emailjs.send(serviceID, templateID, templateParams, userID)
      alert('지원서가 성공적으로 제출되었습니다!')
    } catch (error) {
      console.error('Error submitting email:', error)
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
              <img
                className={styles.job__info__img}
                src={jobNotice}
                alt="채용 공고 이미지"
              />
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
                    placeholder="`-` 없이 연락처를 입력해주세요."
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
