import { forwardRef } from 'react'
import cn from 'classnames'
import { IMultilineField } from '../../../shared/types/form.interface'
import styles from './Field.module.sass'

const Field = forwardRef<HTMLTextAreaElement, IMultilineField>(({ placeholder, error, style, ...props }, ref) => {
	return (
		<div className={styles.field} style={style}>
			<label className={styles.field__label}>
				<span className={styles.field__span}>{placeholder}</span>
				<textarea className={cn(styles.field__input, styles.field__textarea)} ref={ref} {...props} />
			</label>
			{error && <div className={styles.field__error}>{error.message}</div>}
		</div>
	)
})

Field.displayName = 'Field'

export default Field
