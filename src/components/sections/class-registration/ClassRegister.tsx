import { useEffect, useState } from 'react'
import emailjs from 'emailjs-com' // EmailJS 라이브러리 import

import FormTextField from '@components/features/FormTextField'
import Register from '@assets/icon/register.svg?react'
import styles from '@components/sections/class-registration/ClassRegister.module.scss'

import { useLocation } from 'react-router'

declare global {
  interface Window {
    daum: any
  }
}

interface RegisterClass {
  name: string
  phone: string
  age: string
  time: string
  year: string
  month: string
  aboutMonth: string
  address: {
    postCode: string
    roadAddress: string
    detailAddress: string
  }
}

function ClassRegister() {
  const { state } = useLocation()
  const [classData, setClassData] = useState<RegisterClass>({
    name: '',
    phone: '',
    age: '',
    time: '',
    year: '',
    month: '',
    aboutMonth: '',
    address: {
      postCode: '',
      roadAddress: '',
      detailAddress: '',
    },
  })

  const handleInputChange = (name: string, value: string | File | null) => {
    setClassData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddressChange = (field: string, value: string) => {
    setClassData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }))
  }

  useEffect(() => {
    if (classData.year && classData.month) {
      const birthYear = parseInt(classData.year, 10)
      const birthMonth = parseInt(classData.month, 10)

      if (!isNaN(birthYear) && !isNaN(birthMonth)) {
        const today = new Date()
        const currentYear = today.getFullYear()
        const currentMonth = today.getMonth() + 1

        let ageInMonths =
          (currentYear - birthYear) * 12 + (currentMonth - birthMonth)
        ageInMonths = Math.max(0, ageInMonths)

        setClassData((prev) => ({
          ...prev,
          aboutMonth: `${ageInMonths}개월`,
        }))
      }
    }
  }, [classData.year, classData.month])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  const handleAddressRegister = () => {
    new window.daum.Postcode({
      oncomplete: function (data: any) {
        const roadAddr = data.roadAddress
        let extraRoadAddr = ''

        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname
        }
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraRoadAddr +=
            extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName
        }
        if (extraRoadAddr !== '') {
          extraRoadAddr = ` (${extraRoadAddr})`
        }

        const fullRoadAddr = `${roadAddr}${extraRoadAddr}`

        handleAddressChange('postCode', data.zonecode)
        handleAddressChange('roadAddress', fullRoadAddr)
      },
    }).open()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // EmailJS 템플릿에 보낼 데이터
    const templateParams = {
      name: classData.name,
      phone: classData.phone,
      age: classData.aboutMonth,
      time: classData.time,
      postCode: classData.address.postCode,
      roadAddress: classData.address.roadAddress,
      detailAddress: classData.address.detailAddress,
    }

    try {
      const serviceID = 'service_35qhf55' // 제공된 Service ID
      const templateID = 'template_d37txld' // 제공된 Template ID
      const userID = 'rhAvZFF55IWi3omld' // 제공된 User ID

      await emailjs.send(serviceID, templateID, templateParams, userID)
      alert('수업 신청이 성공적으로 완료되었습니다!')
    } catch (error) {
      console.error('이메일 전송 실패:', error)
      alert('수업 신청 중 문제가 발생했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <section className={styles.register}>
      <div className={styles.register__inner}>
        <div>
          <div className={styles.register__desc}>
            <div className={styles.register__titleContainer}>
              <Register className={styles.register__titleContainer__logo} />
              <h1 className={styles.register__titleContainer__title}>
                수업 신청하기
              </h1>
            </div>
            <p className={styles.register__desc__text}>
              아이들을 위한 Dreamus 수업을 신청하세요.
            </p>
          </div>
          <div className={styles.register__content}>
            <h2 className={styles.register__content__title}>수업 신청서</h2>
            {state ? (
              <h2 className={styles.register__content__desc}>
                회복탄력성 유형 결과: {state}
              </h2>
            ) : null}
            <form
              onSubmit={handleSubmit}
              className={styles.register__content__form}
            >
              <FormTextField
                label="이름(자녀)"
                name="name"
                type="text"
                placeholder="자녀 이름을 입력하세요."
                onChange={handleInputChange}
                value={classData.name}
              />
              <FormTextField
                label="핸드폰번호"
                name="phone"
                type="text"
                placeholder="핸드폰 번호를 입력해주세요."
                onChange={handleInputChange}
                value={classData.phone}
              />
              <div className={styles.register__addressContainer}>
                <label className={styles.register__addressContainer__label}>
                  <p className={styles.register__addressContainer__title}>
                    주소
                  </p>
                  <div className={styles.register__addressContainer__search}>
                    <input
                      type="text"
                      placeholder="우편번호"
                      value={classData.address.postCode}
                      readOnly
                    />
                    <button type="button" onClick={handleAddressRegister}>
                      우편번호 찾기
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="도로명주소"
                    value={classData.address.roadAddress}
                    readOnly
                    className={styles.register__addressContainer__address}
                  />
                  <input
                    type="text"
                    placeholder="상세주소"
                    value={classData.address.detailAddress}
                    onChange={(e) =>
                      handleAddressChange('detailAddress', e.target.value)
                    }
                    className={styles.register__addressContainer__address}
                  />
                </label>
              </div>
              <div className={styles.register__ageContainer}>
                <label className={styles.register__ageContainer__label}>
                  <p className={styles.register__ageContainer__title}>
                    연령(개월 수)
                  </p>
                  <div className={styles.register__ageContainer__calc}>
                    <div className={styles.register__ageContainer__year}>
                      <input
                        type="text"
                        name="year"
                        placeholder="출생연도 (예: 2023)"
                        value={classData.year}
                        onChange={(e) =>
                          handleInputChange('year', e.target.value)
                        }
                      />
                      <span>년</span>
                    </div>
                    <div className={styles.register__ageContainer__month}>
                      <input
                        type="text"
                        name="month"
                        placeholder="출생 월 (예: 11)"
                        value={classData.month}
                        onChange={(e) =>
                          handleInputChange('month', e.target.value)
                        }
                      />
                      <span>월</span>
                    </div>
                  </div>
                  <input
                    readOnly
                    value={classData.aboutMonth}
                    name="aboutMonth"
                    placeholder="출생연도와 월을 입력하시면 자동으로 계산됩니다."
                    className={styles.register__ageContainer__result}
                  />
                </label>
              </div>
              <FormTextField
                label="수업 희망 시간"
                name="time"
                type="text"
                placeholder="평일 요일/시간 까지 입력해주세요."
                onChange={handleInputChange}
                value={classData.time}
              />
              <div className={styles.register__content__submit}>
                <button type="submit">수업 신청하기</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassRegister
