import { PayloadAction } from '@reduxjs/toolkit'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Popup } from '../../../shared/types/popup.types'

export const usePopup = () => {
	const { setPopupType } = useActions()
	const { popupType } = useTypedSelector(state => state.ui)
	const isOpened = popupType === 'create'

	const closeByClickingOnOverlay = () => setPopupType(null)

	return { closeByClickingOnOverlay, isOpened }
}
