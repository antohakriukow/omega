import { PayloadAction } from '@reduxjs/toolkit'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useActions } from '../../../hooks/useActions'
import { useProduct } from '../../../hooks/useProduct'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { ProductService } from '../../../services/product'
import { Popup } from '../../../shared/types/popup.types'
import { ProductDTO } from '../../../shared/types/product.types'
import { getKeys } from '../../../utils/getKeys'

export const usePopup = (setValue?: UseFormSetValue<ProductDTO>) => {
	const { setPopupType, setCurrentProduct } = useActions()
	const { popupType, currentProduct } = useTypedSelector(state => state.ui)
	const { createProduct, updateProduct } = useProduct()

	const { isLoading } = useQuery(['product', currentProduct], () => ProductService.getById(currentProduct), {
		onSuccess({ data }) {
			if (!setValue) return
			const dto = {
				title: data.title,
				description: data.description,
				price: data.price,
				imageUrl: data.imageUrl,
			}
			getKeys(dto).forEach(key => setValue(key, dto[key]))
		},
		onError(error) {
			console.log(error)
		},
		enabled: !!currentProduct,
	})

	const isOpened = popupType !== null

	const closePopup = () => setPopupType(null)
	const openCreatePopup = () => setPopupType('create')
	const openUpdatePopup = () => setPopupType('update')
	const openDeletePopup = () => setPopupType('alert')

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

	const submitCreateProduct: SubmitHandler<ProductDTO> = async data => {
		await createProduct(data)
		closePopup()
	}

	const submitUpdateProduct: SubmitHandler<ProductDTO> = async data => {
		await updateProduct(data)
		closePopup()
	}

	return {
		closePopup,
		isOpened,
		openCreatePopup,
		openUpdatePopup,
		openDeletePopup,
		submitCreateProduct,
		submitUpdateProduct,
		isLoading,
	}
}
