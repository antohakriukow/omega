import { FC } from 'react'
import { TypeMaterialIconName } from '../../../shared/types/icon.types'
import MaterialIcon from '../MaterialIcon'
import styles from './Btn.module.sass'

interface IButton {
	icon: TypeMaterialIconName
	title?: string
	_id?: string
	onClick: (e?: React.BaseSyntheticEvent) => void
}
const Btn: FC<IButton> = ({ icon, onClick, title, _id }) => {
	return (
		<button data-id={_id} className={styles.btn} onClick={onClick}>
			<MaterialIcon name={icon} />
			<p className={styles.btn__title}>{title && title.toLocaleUpperCase()}</p>
		</button>
	)
}
export default Btn
