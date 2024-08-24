import styles from '@components/features/FormTextField.module.scss'

interface FormTextFieldProps {
  label: string
  name: string
  placeholder?: string
  type: string
  value?: string | File | null
  onChange: (name: string, value: string | File | null) => void
}

function FormTextField({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
}: FormTextFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'file') {
      const file = e.target.files?.[0] || null
      onChange(name, file)
    } else {
      onChange(name, e.target.value)
    }
  }

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputContainer__label}>
        <p className={styles.inputContainer__title}>{label}</p>
        <input
          onChange={handleChange}
          type={type}
          placeholder={placeholder}
          name={name}
          value={type !== 'file' ? (value as string) : undefined}
          className={styles.inputContainer__input}
        />
      </label>
    </div>
  )
}

export default FormTextField
