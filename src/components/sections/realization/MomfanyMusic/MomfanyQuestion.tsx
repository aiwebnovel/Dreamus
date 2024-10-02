import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AccordionItem from '@components/features/AccordionItem'

import styles from '@components/sections/realization/MomfanyMusic/MomfanyQuestion.module.scss'

const items = [
  {
    question: '맘펴니 뮤직은 어떤 연령대의 아이들에게 적합한가요?',
    answer:
      '맘펴니 뮤직은 만 2세부터 7세까지의 아이들을 위해 설계되었습니다. 각 연령대에 맞는 다양한 프로그램을 제공하고 있어요.',
  },
  {
    question: '프로그램 진행 시간은 어떻게 되나요?',
    answer:
      '기본적으로 30분에서 40분 정도 진행되며, 아이들의 집중도와 상황에 따라 유동적으로 조절할 수 있습니다.',
  },
  {
    question: '교구는 어떤 것들이 제공되나요?',
    answer:
      '리듬악기, 멜로디 악기, 그림 카드, 동작 활동을 위한 소품 등 다양한 교구가 제공됩니다. 모든 교구는 안전성 검사를 통과한 제품이에요.',
  },
  {
    question: '음악 교육이 아이들의 발달에 어떤 도움이 되나요?',
    answer:
      '음악 교육은 아이들의 창의성, 집중력, 사회성, 언어 발달 등 다양한 영역의 성장을 돕습니다. 특히 정서적 안정과 자신감 향상에 큰 도움이 됩니다.',
  },
]

function MomfanyQuestion() {
  const [openIndex, setOpenIndex] = useState(null)
  const navigate = useNavigate()

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={styles.question}>
      <div className={styles.question__inner}>
        <div>
          <h3 className={styles.question__title}>자주 묻는 질문</h3>
          <div className={styles.question__accordian}>
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
          <div className={styles.question__move}>
            <button
              onClick={() => navigate('/class-registration')}
              className={styles.question__move__btn}
            >
              교육 신청하기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MomfanyQuestion
