export interface IProduct {
	_id: string
	title: string
	price: number
	description: string
	isActive: boolean
	imageUrl: string
}

export interface ProductDTO extends Omit<IProduct, '_id'> {}
