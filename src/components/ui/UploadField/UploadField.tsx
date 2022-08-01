import { FC } from 'react'
import { IUploadField } from '../../../shared/types/form.interface'
import styles from './UploadField.module.sass'
import { useUpload } from './useUpload'

const UploadField: FC<IUploadField> = ({ placeholder, error, style, value, folder, onChange }) => {
	const { uploadFile } = useUpload(onChange, folder)

	return (
		<div className={styles.field} style={style}>
			<div className={styles.field__container}>
				<label className={styles.field__label}>
					<span className={styles.field__span}>{placeholder}</span>
					<input className={styles.field__file} type='file' onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
			</div>
		</div>
	)
}

export default UploadField
