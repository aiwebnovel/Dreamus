import menuItems from '@data/menuItems'
import ListItem from '../common/ListItem'

import styles from '@components/layout/Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__container}>
          <ul className={styles.footer__list}>
            {menuItems.map((menu, index) => (
              <ListItem key={index} {...menu} isFooter={true} />
            ))}
          </ul>

          <address className={styles.footer__address}>
            <p className={styles.footer__address__title}>Dreamuse</p>
            <div className={styles.footer__addressContainer}>
              <p className={styles.footer__addressContainer__cor}>
                사업자 등록번호 : 234-12-31244 | 대표 : 최비결
              </p>
              <p className={styles.footer__addressContainer__add}>
                029334 서울특별시 강남구 강남역 지하 1층, 2층, 3층(삼성동,
                삼성전자)
              </p>
              <p className={styles.footer__addressContainer__number}>
                Dreamus 고객센터:02-123-1234
              </p>
            </div>
          </address>

          <div className={styles.footer__copy}>
            <p className={styles.footer__copy__text}>
              © 2024 Dreamus. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
