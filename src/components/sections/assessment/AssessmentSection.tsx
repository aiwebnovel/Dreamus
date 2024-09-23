import { useState } from 'react'
import { questions } from '@data/questions'
import { useNavigate } from 'react-router-dom'
import { resultDescriptions, ResultType } from '@data/resultDescriptions'
import styles from '@components/sections/assessment/AssessmentSection.module.scss'

const getCategoryType = (
  answers: string[],
  start: number,
  end: number,
  highType: string,
  lowType: string,
): string => {
  let countLow = 0
  let countHigh = 0

  for (let i = start; i <= end; i++) {
    if (parseInt(answers[i], 10) <= 2) countLow++
    if (parseInt(answers[i], 10) >= 3) countHigh++
  }

  return countHigh > countLow ? highType : lowType
}

function AssessmentSection() {
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill(''),
  )
  const [result, setResult] = useState<ResultType | ''>('')
  const navigate = useNavigate()

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
  }

  const allQuestionsAnswered = answers.every((answer) => answer !== '')

  const handleSubmit = () => {
    if (!allQuestionsAnswered) {
      alert('모든 질문에 답변해 주세요.')
      return
    }

    const erType = getCategoryType(answers, 0, 3, 'E', 'e')
    const scType = getCategoryType(answers, 4, 8, 'S', 's')
    const psType = getCategoryType(answers, 9, 12, 'P', 'p')
    const saType = getCategoryType(answers, 13, 17, 'A', 'a')

    const resilienceType = `${erType}${scType}${psType}${saType}` as ResultType
    setResult(resilienceType)
  }

  return (
    <section className={styles.assessment}>
      <div className={styles.assessment__inner}>
        <div>
          <div>
            <h2 className={styles.assessment__title}>회복탄력성 유형 분석</h2>
            <p className={styles.assessment__desc}>
              회복탄력성 검사를 통해 아이의 성향을 알아볼 수 있습니다.
            </p>
            <p className={styles.assessment__desc}>
              아이의 회복탄력성 유형을 캐릭터를 통해 확인할 수 있습니다.
            </p>
          </div>
          <div className={styles.assessment__scoreContainer}>
            <p className={styles.assessment__scoreContainer__desc}>
              다음 질문에 대해 해당하는 정도를 선택해주세요.
            </p>
            <p className={styles.assessment__scoreContainer__count}>
              총 18개의 문항입니다.
            </p>
            <p className={styles.assessment__scoreContainer__score}>
              <span>( 0: 전혀 아니다,</span>
              <span>1: 거의 아니다,</span>
              <span>2: 때때로 그렇다,</span>
              <span>3: 자주 그렇다,</span>
              <span>4: 항상 그렇다 )</span>
            </p>
          </div>
          <div className={styles.assessment__questionnaire}>
            <h3 className={styles.assessment__questionnaire__title}>
              회복탄력성 검사
            </h3>
            <div className={styles.assessment__questionnaire__container}>
              {questions.map((question, index) => (
                <div
                  className={styles.assessment__questionnaire__item}
                  key={index}
                >
                  <p>
                    {index + 1}. {question}
                  </p>
                  <div
                    className={
                      styles.assessment__questionnaire__resultContainer
                    }
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <div key={num}>
                        <input
                          id={`q${index}-${num}`}
                          type="radio"
                          name={`question-${index}`}
                          value={num}
                          onChange={(e) =>
                            handleAnswerChange(index, e.target.value)
                          }
                        />
                        <label htmlFor={`q${index}-${num}`}>{num}</label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.assessment__btnContainer}>
              <button
                className={styles.assessment__btnContainer__btn}
                disabled={!allQuestionsAnswered}
                onClick={handleSubmit}
              >
                결과 보기
              </button>
            </div>
            {result && (
              <div>
                <h3>유아의 회복탄력성 유형은 {result}입니다.</h3>
                <p>{resultDescriptions[result]?.title}</p>
                <img
                  src={resultDescriptions[result]?.image}
                  alt={resultDescriptions[result]?.character}
                />
                <p>캐릭터: {resultDescriptions[result]?.character}</p>
                <p>{resultDescriptions[result]?.description}</p>
                <h4>지원 방법:</h4>
                <ul>
                  {resultDescriptions[result]?.support.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>우리 아이의 마음근력을 더 키워주고 싶으신가요?</p>
                <p>지금 띵동의 티티쌤과 상의하세요.</p>
                <button onClick={() => navigate('/class-registration')}>
                  띵동 신청하기
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AssessmentSection
