import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Popup } from '../../shared/types/popup.types'
import { IuiState } from './ui.interface'

const initialState: IuiState = {
	popupType: null,
}

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setPopupType: (state, action: PayloadAction<Popup>) => {
			state.popupType = action.payload
		},
	},
})

export const { setPopupType } = uiSlice.actions
export const uiReducer = uiSlice.reducer
