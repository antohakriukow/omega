import { FC } from 'react'
import { getFileUrl } from '../../../api/api.helpers'
import { IProduct } from '../../../shared/types/product.types'
import styles from './Card.module.sass'
interface ICard {
	data: IProduct
}

const Card: FC<ICard> = ({ data }) => {
	return (
		<div className={styles.card} id={data._id}>
			<img className={styles.card__img} alt={data.title} src={getFileUrl(data.imageUrl)} />
			<div className={styles.card__info}>
				<h3 className={styles.card__title}>{data.title}</h3>
				<p className={styles.card__description}>{data.description}</p>
				<p className={styles.card__price}>{`Price: ${data.price} $`}</p>
			</div>
		</div>
	)
}
export default Card
