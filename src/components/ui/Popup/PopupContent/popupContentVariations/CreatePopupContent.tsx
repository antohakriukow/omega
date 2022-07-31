import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ProductDTO } from '../../../../../shared/types/product.types'
import Btn from '../../../Btn/Btn'
import Field from '../../../Field/Field'
import UploadField from '../../../UploadField/UploadField'
import { usePopup } from '../../usePopup'
import styles from '../PopupContent.module.sass'
const CreatePopupContent: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<ProductDTO>({
		mode: 'onChange',
	})
	const { submitCreateProduct } = usePopup()

	return (
		<>
			<h3 className={styles.popupContent__title}>Add product</h3>
			<form onSubmit={handleSubmit(submitCreateProduct)} className={styles.popupContent__form}>
				<Field
					{...register('title', {
						required: 'Title is required!',
					})}
					placeholder='Title'
					error={errors.title}
				/>
				<Field
					{...register('description', {
						required: 'Description is required!',
					})}
					placeholder='Description'
					error={errors.description}
				/>
				<Field
					{...register('price', {
						required: 'Price is required!',
					})}
					placeholder='Price'
					error={errors.price}
				/>
				<Controller
					name='imageUrl'
					control={control}
					defaultValue=''
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<UploadField onChange={onChange} value={value} error={error} folder='product' placeholder='Image' />
					)}
					rules={{
						required: 'Image is required',
					}}
				/>
				<Btn icon='MdDone' onClick={handleSubmit(submitCreateProduct)} />
			</form>
		</>
	)
}
export default CreatePopupContent
