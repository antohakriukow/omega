import { Popup } from '../../shared/types/popup.types'

export interface IuiState {
	popupType: Popup
	currentProduct: string
	deletingProduct: string | null
}
