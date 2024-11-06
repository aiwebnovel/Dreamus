import styles from '@components/features/BrandItem.module.scss'

interface BrandItemProps {
  // Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  Icon: string
  title: string
  desc: string
  isReverse?: boolean
}

function BrandItem({ Icon, title, desc, isReverse }: BrandItemProps) {
  return (
    <div className={`${styles.brandItem} ${isReverse ? styles.reverse : ''}`}>
      <div>
        {/* <Icon className={styles.brandItem__icon} /> */}
        <img src={Icon} width={'300px'} />
      </div>
      <div className={styles.brandItem__textContainer}>
        <h2 className={styles.brandItem__title}>{title}</h2>
        <p className={styles.brandItem__desc}>{desc}</p>
      </div>
    </div>
  )
}

export default BrandItem
