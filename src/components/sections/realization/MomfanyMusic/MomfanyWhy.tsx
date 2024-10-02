import styles from '@components/sections/realization/MomfanyMusic/MomfanyWhy.module.scss'

import CircleCheck from '@assets/icon/circleCheck.svg?react'

function MomfanyWhy() {
  return (
    <section className={styles.why}>
      <div className={styles.why__inner}>
        <div>
          <div>
            <h3 className={styles.why__title}>이럴 땐 맘펴니 뮤직</h3>
            <ul className={styles.why__list}>
              <li>
                <CircleCheck />
                <p>오늘은 뭐하고 아이들을 놀아주지 고민 될 때</p>
              </li>
              <li>
                <CircleCheck />
                <p>음악수업을 격주 혹은 이벤트로 하고 싶을 때</p>
              </li>
              <li>
                <CircleCheck />
                <p>아이들이 활동하는 시간이 짧아서 아쉬울 때</p>
              </li>
              <li>
                <CircleCheck />
                <p>원하는 수업에 시간을 맞추기 힘들 때</p>
              </li>
              <li>
                <CircleCheck />
                <p>
                  법규상 특활이 불가능한 어린 연령대에 대해 원 만의 특색을
                  갖추고 싶을 때
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MomfanyWhy
