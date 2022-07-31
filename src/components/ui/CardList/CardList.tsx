import { FC } from 'react'
import Card from '../Card/Card'
import CardCreator from '../CardCreator/CardCreator'
import styles from './CardList.module.sass'
import { useProduct } from '../../../hooks/useProduct'

const CardList: FC = () => {
	const { data: response } = useProduct()

	return (
		<ul className={styles.cardList}>
			<li>
				<CardCreator />
			</li>
			{response &&
				response.data.map(product => (
					<li>
						<Card data={product} />
					</li>
				))}
		</ul>
	)
}
export default CardList
