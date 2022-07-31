import { FC } from 'react'
import Btn from '../Btn/Btn'
import styles from './CardToolBar.module.sass'
import { useCardToolBar } from './useCardToolBar'

const CardToolBar: FC = () => {
	const { handleEdit, handleDelete, handleBuy } = useCardToolBar()
	return (
		<div className={styles.toolbar}>
			<Btn icon='MdEdit' onClick={handleEdit} />
			<Btn icon='MdDelete' onClick={handleDelete} />
			<Btn icon='MdDone' onClick={handleBuy} />
		</div>
	)
}
export default CardToolBar
