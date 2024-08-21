import styles from '@components/features/ProgramItem.module.scss'

interface ProgramItemProps {
  title: string
  children: React.ReactNode
}

function ProgramItem({ title, children }: ProgramItemProps) {
  return (
    <div className={styles.program}>
      <h3 className={styles.program__title}>{title}</h3>
      {children}
    </div>
  )
}

export default ProgramItem
