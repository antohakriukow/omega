import { useActions } from '../../../hooks/useActions'

export const useCardCreator = () => {
	const { setPopupType } = useActions()
	const onClick = () => setPopupType('create')

	return { onClick }
}
