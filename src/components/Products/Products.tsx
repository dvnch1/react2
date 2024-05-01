import React, {FC, useEffect, useState} from 'react';
import Product, {IProductProps} from "../Products/Product/Product"


const Products: FC = () => {
    const [products, setProducts] = useState<IProductProps[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => {
                setProducts(products)
            })
    }, []);



    return (
        <div>

            {
                products
                    .map(
                        (value: IProductProps) => (
                            <Product key={value.id}
                                    id={value.id}
                                    title={value.title}
                                    price={value.price}
                                    discountPercentage={value.discountPercentage}
                                    rating={value.rating}
                                     brand={value.brand}
                                    images={value.images}
                                     description={value.description}
                                     stock={value.stock}
                                     category={value.category}
                                     thumbnail={value.thumbnail}
                            />))
            }


        </div>
    );
};

export default Products;