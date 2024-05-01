import React, {FC} from 'react';

export interface IProductProps{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string
}
type ITypeProps = IProductProps & {children?: React.ReactNode};
const Product:FC<ITypeProps> = ({title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}{discountPercentage}</p>
            <p>{rating}</p>
            <p>{brand}</p>
            <p>{category}</p>
            <img src={thumbnail} alt={title}/>
            <p>{stock}</p>
            <img src= {images} alt={title}/>



        </div>
    );
};

export default Product;