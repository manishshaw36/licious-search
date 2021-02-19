import React from 'react';

import './category-header.style.scss';

interface Props  {
  noOfProducts: number,
  categoryName: string
}

export default function CategoryHeader ({ noOfProducts, categoryName }: Props) {
  return (
    <div className="category-header">
        <h3 className="category-name">{categoryName}</h3>
        <p className="category-length">{noOfProducts} Items</p>
    </div>
  );
}