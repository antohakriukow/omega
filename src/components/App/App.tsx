import { FC } from 'react'
import Home from '../screens/home/Home'
import Alert from '../ui/Alert/Alert'
import Footer from '../ui/Footer/Footer'
import Header from '../ui/Header/Header'
import Popup from '../ui/Popup/Popup'
import styles from './App.module.sass'

const App: FC = () => {
	return (
		<div className={styles.app}>
			<Header />
			<Home />
			<Footer />
			<Popup />
			<Alert />
		</div>
	)
}
export default App
