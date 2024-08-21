import ProgramItem from '@components/features/ProgramItem'

import programInfo from '@data/programInfo'

import Logo from '@assets/icon/logo.svg?react'
import Program from '@assets/icon/program.svg?react'

import styles from '@components/sections/dreamus/Introduce.module.scss'

function Introduce() {
  return (
    <section className={styles.introduce}>
      <div className={styles.introduce__inner}>
        <div>
          <div className={styles.introduce__titleContainer}>
            <h1 className={styles.introduce__title}>
              <Logo className={styles.introduce__title__icon} />
              Dreamus 소개
            </h1>
            <p className={styles.introduce__title__desc}>
              Dreamus는 음악을 기반으로 하는 교육 프로그램입니다.
              <br />
              아이들의 성장을 위해 음악과 교육을 접목시킨 교육 프로그램입니다.
              <br />
              Dreamus 만의 특별한 방식으로 아이들을 성장시키는 음악교육
              프로그램을 만나보세요.
              <br />
            </p>
          </div>

          <hr />

          <div className={styles.introduce__programContainer}>
            <h2 className={styles.introduce__program}>
              <Program className={styles.introduce__program__icon} />
              프로그램 소개
            </h2>
            {programInfo.map((category) => (
              <ProgramItem key={category.title} title={category.title}>
                <table className={styles.introduce__table}>
                  <thead className={styles.introduce__table__head}>
                    <tr>
                      <th className={styles.introduce__table__item}>
                        프로그램
                      </th>
                      <th className={styles.introduce__table__item}>연령</th>
                    </tr>
                  </thead>
                  <tbody className={styles.introduce__table__body}>
                    {category.programs.map((program) => (
                      <tr key={program.name}>
                        <th className={styles.introduce__table__item}>
                          {program.name}
                        </th>
                        <th className={styles.introduce__table__item}>
                          {program.age}
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ProgramItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduce
