import { InputHTMLAttributes, ReactNode, useId } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'
import styles from './accountinput.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  notifyMessage?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  rules?: RegisterOptions
  label?: ReactNode
  required?: boolean
  disabled?: boolean
}

export default function AccountInput({
  name,
  register,
  rules,
  label,
  required = false,
  disabled = false,
  errorMessage,
  ...rest
}: Props) {
  const inputId = useId()

  return (
    <div className={styles.wrapper}>
      <div className={styles.input_section}>
        {label && <span className={styles.label}>{label}</span>}

        <input
          id={inputId}
          className={styles.input__regular}
          disabled={disabled}
          required={required}
          {...register(name, rules)}
          {...rest}
        />
      </div>
      <p className={styles.error}>{errorMessage}</p>
    </div>
  )
}
