import { useMutation, useQuery } from '@tanstack/react-query'
import { useAlert } from '../components/ui/Alert/useAlert'
import { ProductService } from '../services/product'
import { ProductDTO } from '../shared/types/product.types'
import { useTypedSelector } from './useTypedSelector'

export const useProduct = () => {
	const queryData = useQuery(['Product list'], () => ProductService.getAll(), {})
	const { currentProduct } = useTypedSelector(state => state.ui)
	const { showAlert } = useAlert()

	const { mutateAsync: createProduct } = useMutation(
		['create product'],
		(data: ProductDTO) => ProductService.create(data),
		{
			onSuccess() {
				queryData.refetch()
				showAlert('Notification', 'product created')
			},
			onError(error) {
				showAlert('Error', `${error}`)
			},
		}
	)

	const { mutateAsync: updateProduct } = useMutation(
		['update product'],
		(data: ProductDTO) => ProductService.update(currentProduct, { ...data, price: Number(data.price) }),
		{
			onSuccess() {
				queryData.refetch()
				showAlert('Notification', 'product updated')
			},
			onError(error) {
				showAlert('Error', `${error}`)
			},
		}
	)

	const { mutateAsync: buyProduct } = useMutation(['buy product'], (_id: string) => ProductService.toggleActive(_id), {
		onSuccess() {
			queryData.refetch()
			showAlert('Notification', 'product status changed')
		},
		onError(error) {
			showAlert('Error', `${error}`)
		},
	})

	const { mutateAsync: deleteProduct } = useMutation(['delete product'], (_id: string) => ProductService.delete(_id), {
		onSuccess() {
			queryData.refetch()
			showAlert('Notification', 'product deleted')
		},
		onError(error) {
			showAlert('Error', `${error}`)
		},
	})

	return { ...queryData, createProduct, updateProduct, deleteProduct, buyProduct }
}
