import { FC } from 'react'
import Card from '../Card/Card'
import CardCreator from '../CardCreator/CardCreator'
import styles from './CardList.module.sass'
import { useProduct } from '../../../hooks/useProduct'

const CardList: FC<{ active?: boolean }> = ({ active }) => {
	const { data: response } = useProduct()
	const isNotEmpty = response && response.data.filter(item => item.isActive === false).length !== 0
	return (
		<>
			<h2>{active && 'Shopping list:'}</h2>
			<h2>{isNotEmpty && !active && 'Already bought:'}</h2>
			<ul className={styles.cardList}>
				{active && (
					<li>
						<CardCreator />
					</li>
				)}
				{response &&
					response.data
						.filter(item => item.isActive === active)
						.map(product => (
							<li>
								<Card data={product} />
							</li>
						))}
			</ul>
		</>
	)
}
export default CardList
