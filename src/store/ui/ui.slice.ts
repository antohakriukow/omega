import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Popup } from '../../shared/types/popup.types'
import { IuiState } from './ui.interface'

const initialState: IuiState = {
	popupType: null,
	currentProduct: '',
	deletingProduct: null,
}

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setPopupType: (state, action: PayloadAction<Popup>) => {
			state.popupType = action.payload
		},
		setCurrentProduct: (state, action: PayloadAction<string>) => {
			state.currentProduct = action.payload
		},
		setDeletingProduct: (state, action: PayloadAction<string | null>) => {
			state.deletingProduct = action.payload
		},
	},
})

export const { setPopupType, setCurrentProduct, setDeletingProduct } = uiSlice.actions
export const uiReducer = uiSlice.reducer
