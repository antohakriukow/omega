import { FC } from 'react'
import MaterialIcon from '../MaterialIcon'

import styles from './CardCreator.module.sass'
import { useCardCreator } from './useCardCreator'

const CardCreator: FC = () => {
	const { onClick } = useCardCreator()
	return (
		<div className={styles.cardCreator} onClick={onClick}>
			<MaterialIcon name='MdAdd' />
		</div>
	)
}
export default CardCreator
