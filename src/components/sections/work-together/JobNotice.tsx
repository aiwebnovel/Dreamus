import { useState } from 'react'

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

  const handleInputChange = (name: string, value: string | File | null) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // 백엔드
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
            <p
              className={styles.job__desc__text}
            >{`아이를 보면 웃음이 절로 나오시나요? 가끔은 혀가 짧아지기도 하시나요?
            그렇다면 Dreamus에 합류하세요. 아이를 사랑하는 마음. 그 마음 하나라면
            당신은 이미 충분합니다. Dreamus와 함께 아이의 마음성장을 도와주세요.
            `}</p>
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
                    placeholder={'`-`없이 연락처를 입력해주세요.'}
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
