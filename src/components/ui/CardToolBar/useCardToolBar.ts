import { useActions } from '../../../hooks/useActions'

export const useCardToolBar = () => {
	const { setPopupType, setCurrentProduct, setDeletingProduct } = useActions()

	const handleUpdate = (_id: string) => {
		setPopupType('update')
		setCurrentProduct(_id)
	}

	const handleDelete = (_id: string) => {
		setDeletingProduct(_id)
	}
	const handleBuy = () => {}

	return { handleUpdate, handleDelete, handleBuy }
}
