import { FC } from 'react'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import CreatePopupContent from './popupContentVariations/CreatePopupContent'
import UpdatePopupContent from './popupContentVariations/UpdatePopupContent'

const PopupContent: FC = () => {
	const { popupType } = useTypedSelector(state => state.ui)
	switch (popupType) {
		case 'create':
			return <CreatePopupContent />
		case 'update':
			return <UpdatePopupContent />
		default:
			return null
	}
}
export default PopupContent
