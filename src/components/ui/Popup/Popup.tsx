import { FC } from 'react'
import styles from './Popup.module.sass'
import { usePopup } from './usePopup'
import Btn from '../Btn/Btn'
import PopupContent from './PopupContent/PopupContent'

const Popup: FC = () => {
	const { closePopup, isOpened } = usePopup()
	if (!isOpened) return null
	return (
		<div className={styles.popup__container}>
			<div className={styles.popup__overlay} onClick={closePopup} />
			<div className={styles.popup}>
				<Btn icon='MdClose' onClick={closePopup} />
				<PopupContent />
			</div>
		</div>
	)
}
export default Popup
