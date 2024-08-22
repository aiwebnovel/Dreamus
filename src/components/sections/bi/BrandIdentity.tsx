import BrandItem from '@components/features/BrandItem'

import brandItems from '@data/brandItems'

import styles from '@components/sections/bi/BrandIdentity.module.scss'

function BrandIdentity() {
  return (
    <section className={styles.identity}>
      <div className={styles.identity__inner}>
        <div>
          <div>
            <h1 className={styles.identity__title}>Brand Identity</h1>
            <p className={styles.indentity__desc}>
              Dreamus는 아이들의 음악적 재능과 창의성을 키우는 특별한 유아
              음악교육 프로그램을 제공합니다.
              <br />
              우리의 다섯 가지 프로그램은 각각 고유한 특성과 목표를 가지고
              있으며, 아이들의 다양한 음악적 관심사와 발달 단계를 고려하여
              설계되었습니다.
            </p>
          </div>
        </div>
        <div>
          {brandItems.map((item, index) => (
            <BrandItem
              Icon={item.Icon}
              title={item.title}
              desc={item.desc}
              key={index}
              isReverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandIdentity
