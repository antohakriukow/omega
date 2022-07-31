import { FC } from 'react'
import styles from './Popup.module.sass'
import { usePopup } from './usePopup'
import cn from 'classnames'

const Popup: FC = () => {
	const { closeByClickingOnOverlay, isOpened } = usePopup()
	if (!isOpened) return null
	return (
		<div className={styles.popup__container}>
			<div className={styles.popup__overlay} onClick={closeByClickingOnOverlay} />
			<div className={styles.popup}></div>
		</div>
	)
}
export default Popup
