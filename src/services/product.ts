import { getProductUrl } from '../api/api.helpers'
import axios from '../api/axios'
import { IProduct, ProductDTO } from '../shared/types/product.types'

export const ProductService = {
	async getAll() {
		return axios.get<IProduct[]>(getProductUrl(''))
	},

	async getById(_id: string) {
		return axios.get<IProduct>(getProductUrl(`/${_id}`))
	},

	async create(dto: ProductDTO) {
		return axios.post<string>(getProductUrl(''), dto)
	},

	async update(_id: string, dto: ProductDTO) {
		return axios.put<string>(getProductUrl(`/${_id}`), dto)
	},

	async delete(_id: string) {
		return axios.delete<IProduct>(getProductUrl(`/${_id}`))
	},
}
