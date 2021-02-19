import react from 'react';
import CategoryHeader from '../category-header/category-header.component';
import Product from '../product/product.component';

interface Props {
    productList: any[]
}

export default function Category({ productList }: Props) {
    return <>
        {
            productList.map((item: any, index: number) => {
                return (
                    <div className="product-category" key={index}>
                        <CategoryHeader categoryName={item.categoryDetails.cat_name} noOfProducts={item.productDetails.length} />

                        {
                            item.productDetails.length ?
                                item.productDetails.map((productItem: any) => (
                                    <Product productItem={productItem} key={productItem.item_id} />
                                ))
                                : null
                        }

                    </div>
                )
            })
        }
    </>
}