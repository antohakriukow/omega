import { FC } from 'react'
import styles from './Popup.module.sass'
import { usePopup } from './usePopup'
import Btn from '../Btn/Btn'
import PopupForm from './PopupForm'

const Popup: FC = () => {
	const { closePopup, isOpened, popupTitle } = usePopup()
	if (!isOpened) return null

	return (
		<div className={styles.popup__container}>
			<div className={styles.popup__overlay} onClick={closePopup} />
			<div className={styles.popup}>
				<Btn icon='MdClose' onClick={closePopup} />
				<h3 className={styles.popup__title}>{popupTitle()} PRODUCT</h3>
				<PopupForm />
			</div>
		</div>
	)
}
export default Popup
