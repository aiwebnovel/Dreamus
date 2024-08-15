import { Link } from 'react-router-dom'

import styles from '@components/common/ListItem.module.scss'

interface ListItemProps {
  title: string
  desc?: string
  path: string
  children?: React.ReactNode
}

function ListItem({ title, desc, path, children }: ListItemProps) {
  return (
    <li className={styles.listItem}>
      <Link className={styles.listItem__link} to={path}>
        {children}
        <div className={styles.listItem__content}>
          <h5 className={styles.listItem__title}>{title}</h5>
          {desc && <p className={styles.listItem__desc}>{desc}</p>}
        </div>
      </Link>
    </li>
  )
}

export default ListItem
