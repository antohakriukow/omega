import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

export const useAlert = () => {
	const { alert } = useTypedSelector(state => state.ui)
	const { setAlert } = useActions()

	const alertConfig = { timeout: 5000 }

	const _showAlert = (title: string, message: string) => setAlert({ title, message, isVisible: true })

	const _hideAlert = () => setAlert({ title: null, message: null, isVisible: false })

	const showAlert = async (title: string, message: string) => {
		_showAlert(title, message)
		await setTimeout(() => _hideAlert(), alertConfig.timeout)
	}

	return { ...alert, showAlert }
}
