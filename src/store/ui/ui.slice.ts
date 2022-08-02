import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeAlert } from '../../shared/types/alert.interface'
import { Popup } from '../../shared/types/popup.types'
import { IuiState } from './ui.interface'

const initialAlertState = {
	title: '',
	message: null,
	isVisible: false,
}

const initialState: IuiState = {
	popupType: null,
	currentProduct: '',
	deletingProduct: null,
	alert: initialAlertState,
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
		setAlert: (state, action: PayloadAction<TypeAlert>) => {
			state.alert = action.payload
		},
	},
})

export const { setPopupType, setCurrentProduct, setDeletingProduct, setAlert } = uiSlice.actions
export const uiReducer = uiSlice.reducer
