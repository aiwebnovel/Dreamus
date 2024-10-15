import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import ListItem from '@components/common/ListItem'

import menuItems from '@data/menuItems'

// import Logo from '@assets/icon/logo.svg?react'
import dreamusLogo from '@assets/image/dreamusLogo.png'
import Hamburger from '@assets/icon/hamburger.svg?react'
import Close from '@assets/icon/close.svg?react'

import styles from '@components/layout/Header.module.scss'

function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767)
      if (window.innerWidth > 767) {
        setIsNavOpen(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = (menuName: string) => {
    setOpenMenu((prevMenu) => (prevMenu === menuName ? null : menuName))
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.header__inner}>
        <h2 className={styles.header__logo}>
          <Link className={styles.header__logo__link} to="/">
            {/* <Logo className={styles.header__logo__icon} />
            <span className={styles.header__logo__title}>Dreamus</span> */}
            <img src={dreamusLogo} className={styles.header__logo__icon} />
          </Link>
        </h2>

        <button className={styles.header__toggleBtn} onClick={toggleNav}>
          <Hamburger className={styles.header__toggleBtn__icon} />
        </button>

        <AnimatePresence>
          {(!isMobile || isNavOpen) && (
            <motion.nav
              className={styles.header__nav}
              initial={isMobile ? { x: '100%' } : { opacity: 0 }}
              animate={isMobile ? { x: 0 } : { opacity: 1 }}
              exit={isMobile ? { x: '100%' } : { opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {isMobile && (
                <Close
                  onClick={toggleNav}
                  className={styles.header__navList__close}
                />
              )}
              <ul className={styles.header__navList}>
                {menuItems.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    onToggle={() => item.subItems && toggleMenu(item.title)}
                    isOpen={openMenu === item.title}
                  />
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
