import { motion, AnimatePresence } from 'framer-motion'
import DownArrow from '@assets/icon/downArrow.svg?react'
import UpArrow from '@assets/icon/upArrow.svg?react'

import styles from '@components/features/AccordionItem.module.scss'

interface AccordionItemProps {
  item: {
    question: string
    answer: string
  }
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__item} onClick={onToggle}>
        <p className={styles.accordion__question}>{item.question}</p>
        <button className={styles.accordion__btn}>
          {isOpen ? (
            <UpArrow className={styles.accordion__icon} />
          ) : (
            <DownArrow className={styles.accordion__icon} />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.accordion__answer}
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AccordionItem
