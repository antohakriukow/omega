import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../../../services/product'

export const useCardList = () => {
	const queryData = useQuery(['Product list'], () => ProductService.getAll(), {})

	return { ...queryData }
}
