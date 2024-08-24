import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import ListItem from '@components/common/ListItem'

import Logo from '@assets/icon/logo.svg?react'
import UpArrow from '@assets/icon/upArrow.svg?react'
import DownArrow from '@assets/icon/downArrow.svg?react'
import Introduce from '@assets/icon/introduce.svg?react'
import Ceo from '@assets/icon/ceo.svg?react'
import Thinking from '@assets/icon/think.svg?react'
import Piano from '@assets/icon/piano.svg?react'
import Mom from '@assets/icon/mom.svg?react'
import Drum from '@assets/icon/drum.svg?react'
import Music from '@assets/icon/music.svg?react'
import Hamburger from '@assets/icon/hamburger.svg?react'

import styles from '@components/layout/Header.module.scss'

const item = {
  hidden: { scale: 0, opacity: 0, y: -20 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
  },
}

function Header() {
  const [showFirstMenu, setShowFirstMenu] = useState<boolean>(false)

  const [showSecondMenu, setShowSecondMenu] = useState<boolean>(false)

  const handleFirstMenu = () => {
    if (showSecondMenu) {
      setShowSecondMenu(false)
    }
    setShowFirstMenu(!showFirstMenu)
  }

  const handleSecondMenu = () => {
    if (showFirstMenu) {
      setShowFirstMenu(false)
    }
    setShowSecondMenu(!showSecondMenu)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <h2 className={styles.header__logo}>
          <Link className={styles.header__logo__link} to="/">
            <Logo className={styles.header__logo__icon} />
            <span className={styles.header__logo__text}>Dreamus</span>
          </Link>
        </h2>

        <Hamburger className={styles.header__mobile} />

        <nav className={styles.header__navigation}>
          <ul className={styles.header__nav}>
            <li className={styles.header__nav__item}>
              <h3
                className={styles.header__nav__title}
                onClick={handleFirstMenu}
              >
                <span>드림어스</span>
                {showFirstMenu ? (
                  <UpArrow className={styles.header__arrow} />
                ) : (
                  <DownArrow className={styles.header__arrow} />
                )}
              </h3>
              {showFirstMenu && (
                // motion 추가
                <ul
                  className={styles.header__nav__list}
                  // initial="hidden"
                  // animate="visible"
                  // variants={item}
                >
                  <ListItem
                    title="Dreamus 소개"
                    path="/dreamus/introduction"
                    desc="Dreamus 유아 음악교육 프로그램에 대해 소개합니다."
                  >
                    <Introduce className={styles.header__nav__icon} />
                  </ListItem>
                  <ListItem
                    title="CEO 인사"
                    desc="Dreamus CEO 인사드립니다."
                    path="/dreamus/ceomessage"
                  >
                    <Ceo className={styles.header__nav__icon} />
                  </ListItem>
                </ul>
              )}
            </li>
            <ListItem title="BI" path="/bi" />
            <li>
              <h3
                onClick={handleSecondMenu}
                className={styles.header__nav__title}
              >
                <span>꿈의실현</span>
                {showSecondMenu ? (
                  <UpArrow className={styles.header__arrow} />
                ) : (
                  <DownArrow className={styles.header__arrow} />
                )}
              </h3>
              {showSecondMenu && (
                <motion.ul
                  className={styles.header__nav__list}
                  initial="hidden"
                  animate="visible"
                  variants={item}
                >
                  <ListItem
                    title="씽씽큐 뮤직"
                    path="/realization/singsingq-music"
                    desc="씽씽큐 뮤직 프로그램에 대한 설명입니다."
                  >
                    <Music className={styles.header__nav__icon} />
                  </ListItem>
                  <ListItem
                    title="쿵! 치! 타! 드럼,난타,장구"
                    path="/realization/drum-nanta-janggu"
                    desc="쿵! 치! 타! 드럼, 난타, 장구에 대한 설명입니다."
                  >
                    <Drum className={styles.header__nav__icon} />
                  </ListItem>
                  <ListItem
                    title="룰루랄라 피아노"
                    path="/realization/lululala-piano"
                    desc="룰루랄라 피아노 프로그램에 대한 설명입니다."
                  >
                    <Piano className={styles.header__nav__icon} />
                  </ListItem>
                  <ListItem
                    title="생각놀이터 띵동"
                    path="/"
                    desc="생각놀이터 띵동 프로그램에 대한 설명입니다."
                  >
                    <Thinking className={styles.header__nav__icon} />
                  </ListItem>
                  <ListItem
                    title="맘펴니 뮤직"
                    path="/realization/momfany-music"
                    desc="맘펴니 뮤직 프로그램에 대한 설명입니다."
                  >
                    <Mom className={styles.header__nav__icon} />
                  </ListItem>
                </motion.ul>
              )}
            </li>
            <ListItem title="함께일해요" path="/work-together" />
            <ListItem title="듣.보.드" path="/dreamus-gallery" />
            <ListItem title="수업 신청" path="/class-registration" />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
