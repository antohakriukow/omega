import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

export const useCardToolBar = () => {
	const { setPopupType, setCurrentProduct } = useActions()
	const { popupType, currentProduct } = useTypedSelector(state => state.ui)

	const handleUpdate = (_id: string) => {
		setPopupType('update')
		setCurrentProduct(_id)
	}

	const handleDelete = () => {}
	const handleBuy = () => {}

	return { handleUpdate, handleDelete, handleBuy }
}
