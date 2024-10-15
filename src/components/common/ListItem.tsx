import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import { MenuItem, SubItem } from '@models/menu'

import UpArrow from '@assets/icon/upArrow.svg?react'
import DownArrow from '@assets/icon/downArrow.svg?react'

import styles from '@components/common/ListItem.module.scss'

interface ListItemProps extends MenuItem {
  onToggle?: () => void
  isOpen?: boolean
  isFooter?: boolean
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  link,
  icon: Icon,
  description,
  subItems,
  onToggle,
  isOpen,
  isFooter = false,
}) => {
  if (isFooter) {
    return (
      <li className={styles.footerItem}>
        <h3 className={styles.footerItem__title}>
          {subItems ? (
            `${title}`
          ) : (
            <Link className={styles.footerItem__subTitle} to={link as string}>
              {title}
            </Link>
          )}
        </h3>
        {subItems && (
          <ul className={styles.footerItem__subList}>
            {subItems.map((item: SubItem, index: number) => (
              <li key={index} className={styles.footerItem__subList__item}>
                <Link
                  to={item.link || '#'}
                  className={styles.footerItem__subList__link}
                >
                  <span className={styles.footerItem__subList__title}>
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    )
  }

  return (
    <li className={styles.listItem}>
      {subItems ? (
        <div className={styles.listItem__wrapper}>
          <h3 className={styles.listItem__menu} onClick={onToggle}>
            <span className={styles.listItem__menu__title}>{title}</span>
            {isOpen ? (
              <UpArrow className={styles.listItem__icon} />
            ) : (
              <DownArrow className={styles.listItem__icon} />
            )}
          </h3>
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className={styles.listItem__subList}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {subItems.map((item: SubItem, index: number) => (
                  <li className={styles.listItem__subItem} key={index}>
                    <Link
                      className={styles.listItem__subItem__link}
                      to={item.link}
                    >
                      {/* {item.icon && (
                        <item.icon className={styles.listItem__subItem__icon} />
                      )} */}
                      {item.logo && (
                        <img
                          src={item.logo}
                          className={styles.listItem__subItem__icon}
                        />
                      )}
                      <div className={styles.listItem__subItem__text}>
                        <span className={styles.listItem__subItem__title}>
                          {item.title}
                        </span>
                        <p className={styles.listItem__subItem__desc}>
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link to={link || '#'} className={styles.listItem__link}>
          {Icon && (
            <div className={styles.listItem__iconWrapper}>
              <Icon className={styles.listItem__icon} />
            </div>
          )}
          <span className={styles.listItem__link__title}>{title}</span>
          {description && (
            <p className={styles.listItem__description}>{description}</p>
          )}
        </Link>
      )}
    </li>
  )
}

export default ListItem
