import { useEffect, useState } from 'react'
import Register from '@assets/icon/register.svg?react'
import FormTextField from '@/components/features/FormTextField'

import styles from '@components/sections/class-registration/ClassRegister.module.scss'

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
          <div>
            <h2>수업 신청서</h2>
            <form>
              <FormTextField
                label="이름(자녀)"
                name="name"
                type="text"
                placeholder="자녀 이름을 입력하세요."
                onChange={handleInputChange}
                value={classData.name}
              />
              {classData.name ? null : (
                <span className={styles.register__required}>
                  위 항목은 필수로 입력해주세요
                </span>
              )}
              <FormTextField
                label="핸드폰번호"
                name="phone"
                type="text"
                placeholder="핸드폰 번호를 입력해주세요."
                onChange={handleInputChange}
                value={classData.phone}
              />
              {classData.phone ? null : (
                <span className={styles.register__required}>
                  위 항목은 필수로 입력해주세요
                </span>
              )}
              <div>
                <label>
                  <p>주소</p>
                  <div>
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
                  <div>
                    <input
                      type="text"
                      placeholder="도로명주소"
                      value={classData.address.roadAddress}
                      readOnly
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="상세주소"
                      value={classData.address.detailAddress}
                      onChange={(e) =>
                        handleAddressChange('detailAddress', e.target.value)
                      }
                    />
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <p>연령(개월 수)</p>
                  <div>
                    <div>
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
                    <div>
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
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassRegister
