import { useMutation, useQuery } from '@tanstack/react-query'
import { ProductService } from '../services/product'
import { ProductDTO } from '../shared/types/product.types'
import { useTypedSelector } from './useTypedSelector'

export const useProduct = () => {
	const queryData = useQuery(['Product list'], () => ProductService.getAll(), {})
	const { currentProduct } = useTypedSelector(state => state.ui)

	const { mutateAsync: createProduct } = useMutation(
		['create product'],
		(data: ProductDTO) => ProductService.create(data),
		{
			onSuccess() {
				queryData.refetch()
			},
		}
	)

	const { mutateAsync: updateProduct } = useMutation(
		['update product'],
		(data: ProductDTO) => ProductService.update(currentProduct, data),
		{
			onSuccess() {
				queryData.refetch()
			},
		}
	)

	const { mutateAsync: deleteProduct } = useMutation(['delete product'], (_id: string) => ProductService.delete(_id), {
		onSuccess() {
			queryData.refetch()
		},
	})

	return { ...queryData, createProduct, updateProduct, deleteProduct }
}
