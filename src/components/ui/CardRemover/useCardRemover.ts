import { useActions } from '../../../hooks/useActions'
import { useProduct } from '../../../hooks/useProduct'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

export const useCardRemover = () => {
	const { setDeletingProduct } = useActions()
	const { deletingProduct } = useTypedSelector(state => state.ui)
	const { deleteProduct } = useProduct()

	const onAccept = () => deletingProduct && deleteProduct(deletingProduct)

	const onAbort = () => setDeletingProduct(null)

	return { onAccept, onAbort }
}
