import { FC } from 'react'
import CardList from '../../ui/CardList/CardList'

const Home: FC = () => {
	return (
		<div>
			<CardList active />
			<CardList active={false} />
		</div>
	)
}
export default Home
