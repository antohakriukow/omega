import { TypeAlert } from '../../shared/types/alert.interface'
import { Popup } from '../../shared/types/popup.types'

export interface IuiState {
	popupType: Popup
	currentProduct: string
	deletingProduct: string | null
	alert: TypeAlert
}
