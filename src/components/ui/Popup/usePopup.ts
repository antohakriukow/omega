import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useActions } from '../../../hooks/useActions'
import { useProduct } from '../../../hooks/useProduct'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { ProductService } from '../../../services/product'
import { ProductDTO } from '../../../shared/types/product.types'
import { getKeys } from '../../../utils/getKeys'

export const usePopup = (setValue?: UseFormSetValue<ProductDTO>) => {
	const { setPopupType } = useActions()
	const { popupType, currentProduct } = useTypedSelector(state => state.ui)
	const { createProduct, updateProduct } = useProduct()

	const isOpened = popupType !== null
	const isCreatePopup = popupType === 'create'
	const isUpdatePopup = popupType === 'update'
	const isDeletePopup = popupType === 'delete'

	const popupTitle = () => {
		if (isCreatePopup) return 'CREATE'
		if (isUpdatePopup) return 'UPDATE'
		if (isDeletePopup) return 'DELETE'
	}

	useQuery(['product', currentProduct], () => ProductService.getById(currentProduct), {
		onSuccess({ data }) {
			if (!data || !setValue) return
			const dto = {
				title: data.title,
				description: data.description,
				price: data.price,
				imageUrl: data.imageUrl,
			}
			getKeys(dto).forEach(key => {
				isCreatePopup ? setValue(key, '') : setValue(key, dto[key])
			})
		},
		onError(error) {
			console.log(error)
		},
		enabled: !!currentProduct,
	})

	const closePopup = () => {
		setPopupType(null)
	}

	const openCreatePopup = () => setPopupType('create')
	const openUpdatePopup = () => setPopupType('update')
	const openDeletePopup = () => setPopupType('delete')

	useEffect(() => {
		const handleEscPress = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closePopup()
		}

		document.addEventListener('keydown', handleEscPress)

		return () => {
			document.removeEventListener('keydown', handleEscPress)
		}
	}, [setPopupType])

	//Popup submit functions:

	const _submitCreateProduct: SubmitHandler<ProductDTO> = async data => {
		await createProduct(data)
		closePopup()
	}

	const _submitUpdateProduct: SubmitHandler<ProductDTO> = async data => {
		await updateProduct(data)
		closePopup()
	}

	const onSubmit = isCreatePopup ? _submitCreateProduct : _submitUpdateProduct

	return {
		isOpened,
		popupTitle,
		closePopup,
		openCreatePopup,
		openUpdatePopup,
		openDeletePopup,
		onSubmit,
	}
}
