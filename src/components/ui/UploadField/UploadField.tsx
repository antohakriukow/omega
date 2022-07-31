import { FC } from 'react'
import { IUploadField } from '../../../shared/types/form.interface'
import styles from './UploadField.module.sass'
import { useUpload } from './useUpload'

const UploadField: FC<IUploadField> = ({ placeholder, error, style, value, folder, onChange, isNoImage = false }) => {
	const { uploadFile, isLoading } = useUpload(onChange, folder)

	return (
		<div className={styles.uploadField} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input className={styles.input_file} type='file' onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>{isLoading && value && <img src={value} alt='' />}</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
