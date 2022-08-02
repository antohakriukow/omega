import { FC } from 'react'
import styles from './Alert.module.sass'
import { useAlert } from './useAlert'

const Alert: FC = () => {
	const { title, message, isVisible } = useAlert()

	if (!isVisible) return null

	return (
		<div className={styles.alert}>
			<h3 className={styles.alert__title}>{title && title.toLocaleUpperCase()}</h3>
			<p className={styles.alert__message}>{message && message.toLocaleUpperCase()}</p>
		</div>
	)
}
export default Alert
