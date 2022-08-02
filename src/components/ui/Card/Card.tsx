import { FC } from 'react'
import cn from 'classnames'
import { getFileUrl } from '../../../api/api.helpers'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { IProduct } from '../../../shared/types/product.types'
import CardRemover from '../CardRemover/CardRemover'
import CardToolBar from '../CardToolBar/CardToolBar'
import styles from './Card.module.sass'
interface ICard {
	data: IProduct
}

const Card: FC<ICard> = ({ data }) => {
	const { deletingProduct } = useTypedSelector(state => state.ui)
	const deletingCard = deletingProduct === data._id
	return (
		<div
			className={cn(styles.card__wrapper, {
				[styles.smoky]: !data.isActive,
			})}
		>
			{deletingCard ? (
				<CardRemover />
			) : (
				<div className={styles.card} id={data._id}>
					<div className={styles.card__frame}>
						<img draggable={false} className={styles.card__img} alt={data.title} src={getFileUrl(data.imageUrl)} />
					</div>
					<div className={styles.card__info}>
						<h3 className={styles.card__title}>{data.title}</h3>
						<p className={styles.card__description}>{data.description}</p>
						<p className={styles.card__price}>{`Price: ${data.price} $`}</p>
						<CardToolBar _id={data._id} isActive={data.isActive} />
					</div>
				</div>
			)}
		</div>
	)
}
export default Card
