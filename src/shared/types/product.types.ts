export interface IProduct {
	_id: string
	title: string
	price: number
	description: string
	isActive: boolean
	imageUrl: string
}

export interface ProductDTO {
	title: string
	price: number
	description: string
	isActive: boolean
	imageUrl: string
}
