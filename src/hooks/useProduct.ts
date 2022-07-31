import { useMutation, useQuery } from '@tanstack/react-query'
import { ProductService } from '../services/product'
import { IProduct, ProductDTO } from '../shared/types/product.types'

export const useProduct = () => {
	const queryData = useQuery(['Product list'], () => ProductService.getAll(), {})

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
		(data: IProduct) => ProductService.update(data),
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
