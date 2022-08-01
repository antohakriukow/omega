import { FC } from 'react'
import Btn from '../Btn/Btn'

import styles from './CardRemover.module.sass'
import { useCardRemover } from './useCardRemover'

const CardRemover: FC = () => {
	const { onAccept, onAbort } = useCardRemover()
	return (
		<div className={styles.cardRemover}>
			<Btn icon='MdDone' onClick={onAccept} title='Delete' />
			<Btn icon='MdClear' onClick={onAbort} title='Abort' />
		</div>
	)
}
export default CardRemover
