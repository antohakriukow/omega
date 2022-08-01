import { useActions } from '../../../hooks/useActions'
import { useProduct } from '../../../hooks/useProduct'

export const useCardToolBar = () => {
	const { setPopupType, setCurrentProduct, setDeletingProduct } = useActions()
	const { buyProduct } = useProduct()

	const handleUpdate = (_id: string) => {
		setPopupType('update')
		setCurrentProduct(_id)
	}

	const handleDelete = (_id: string) => {
		setDeletingProduct(_id)
	}
	const handleBuy = (_id: string) => buyProduct(_id)

	return { handleUpdate, handleDelete, handleBuy }
}
