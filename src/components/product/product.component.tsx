import React, { useCallback } from 'react';

import Dropdown from '../dropdown/dropdown.component';

import './product.style.scss';

interface Props {
    productItem: any;
}

class DropdownOption {
    displayName: string;
    value: any;
    constructor(name: string, value: any) {
        this.displayName = name;
        this.value = value;
    }
}

function Product({ productItem }: Props) {
    const {item_image, item_name, item_price, item_discount, net, productInventory } = productItem;

    const offerPrice = (price: number, discount: number) => {
        var discountPrice = price - (price * discount/100)
        return discountPrice.toFixed(2);
    }

    const dropdownOptions: DropdownOption[] = [
        new DropdownOption(`Net wt: ${net}`, net)
    ];

    const deliveryRef = useCallback((node: any) => {
        if (node !== null) {
            node.innerHTML = productInventory.next_available_by;
        }
    }, []);

    return (
        <div className="product">
            <div className="product-card">
                <div className="product-content">
                    <div className="product-image-box">
                        <div className="product-image">
                            <img src={item_image} alt={item_name} />
                        </div>
                    </div>
                    <div className="content">
                        <h5 className="item-name">{item_name}</h5>
                        <div className="price">
                            {
                                item_discount > 0  ?
                                    <>
                                        <span className="offer">{item_discount}% Off</span>
                                        <span className="mrp">MRP:</span>
                                        <span className="strike">&#8377; {item_price}</span>
                                        <span className="sell-price">&#8377; {offerPrice(item_price, item_discount)}</span>
                                    </> : 
                                    <>
                                        <span className="mrp">MRP:</span>
                                        <span className="sell-price">&#8377; {item_price}</span>
                                    </>
                            }
                        </div>
                    </div>
                </div>
                <div className="product-action">
                    <Dropdown options={dropdownOptions} value={net}/>
                    <div className="icon-button">
                        <span className="delivery">
                            <i className="fas fa-motorcycle"></i> 
                            <span ref={deliveryRef}>
                            </span>
                        </span>
                        <button className="product-add-btn">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product;
