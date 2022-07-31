import { PayloadAction } from '@reduxjs/toolkit'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useActions } from '../../../hooks/useActions'
import { useProduct } from '../../../hooks/useProduct'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { ProductService } from '../../../services/product'
import { Popup } from '../../../shared/types/popup.types'
import { ProductDTO } from '../../../shared/types/product.types'

export const usePopup = () => {
	const { setPopupType } = useActions()
	const { popupType } = useTypedSelector(state => state.ui)
	const { createProduct } = useProduct()

	const isOpened = popupType !== null

	const closePopup = () => setPopupType(null)
	const openCreatePopup = () => setPopupType('create')
	const openUpdatePopup = () => setPopupType('update')
	const openDeletePopup = () => setPopupType('alert')

	const submitCreateProduct: SubmitHandler<ProductDTO> = async data => {
		await createProduct(data)
		closePopup()
	}

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

	return { closePopup, isOpened, openCreatePopup, openUpdatePopup, openDeletePopup, submitCreateProduct }
}
