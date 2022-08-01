import { forwardRef } from 'react'
import { IField } from '../../../shared/types/form.interface'
import styles from './Field.module.sass'

const Field = forwardRef<HTMLInputElement, IField>(({ placeholder, error, type = 'text', style, ...props }, ref) => {
	return (
		<div className={styles.field} style={style}>
			<label className={styles.field__label}>
				<span className={styles.field__span}>{placeholder}</span>
				<input className={styles.input} ref={ref} type={type} {...props} />
			</label>
			{error && <div className={styles.error}>{error.message}</div>}
		</div>
	)
})

Field.displayName = 'Field'

export default Field
