import { FC } from 'react'
import Btn from '../Btn/Btn'
import styles from './CardToolBar.module.sass'
import { useCardToolBar } from './useCardToolBar'

const CardToolBar: FC<{ _id: string }> = ({ _id }) => {
	const { handleUpdate, handleDelete, handleBuy } = useCardToolBar()
	const onUpdate = (e: React.BaseSyntheticEvent) => {
		handleUpdate(e.currentTarget.dataset.id)
	}
	const onDelete = (e: React.BaseSyntheticEvent) => {
		handleDelete(e.currentTarget.dataset.id)
	}

	return (
		<div className={styles.toolbar}>
			<Btn _id={_id} icon='MdEdit' onClick={e => e && onUpdate(e)} />
			<Btn _id={_id} icon='MdDelete' onClick={e => e && onDelete(e)} />
			<Btn _id={_id} icon='MdDone' onClick={handleBuy} />
		</div>
	)
}
export default CardToolBar
