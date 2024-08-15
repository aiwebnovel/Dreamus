import { Link } from 'react-router-dom'

interface ListItemProps {
  title: string
  path: string
  className: string
  linkClassName?: string
}

function ListItem({ title, path, className, linkClassName }: ListItemProps) {
  return (
    <li className={className}>
      <Link className={linkClassName} to={path}>
        {title}
      </Link>
    </li>
  )
}

export default ListItem
