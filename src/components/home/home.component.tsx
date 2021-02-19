import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import { getProductList } from '../../redux/actions/product.action';
import Category from '../category/category.component';

import './home.style.scss';

function filterProducts (productList: any, searchValue: string) {
  return productList.filter((cat: any) => {
    const { productDetails, categoryDetails } = cat;
    if(categoryDetails?.cat_name) {
      const catName = categoryDetails.cat_name.toLowerCase();
      searchValue = searchValue.toLowerCase();
      if(catName.includes(searchValue)) return true;
      const productFilterList = productDetails.filter((product: any) => {
        const itemName = product.item_name.toLowerCase();
        if(itemName.includes(searchValue)) return true;
        return false;
      });
      if(productFilterList.length) {
        cat.productDetails = [...productFilterList];
        return true;
      }
    }
    return false;
  })
}

function Home(props: any) {
  const { getProductList, productList, searchValue } = props;
  const [ filteredList, setFilteredList ] = useState<any[]>([])

  useEffect(() => {
    getProductList();
  }, []);

  useEffect(() => {
    if(searchValue) 
      setFilteredList(filterProducts(productList, searchValue))
    else 
      setFilteredList(productList)
  }, [productList, searchValue])

  return (
    <div className="home-container">
      {
        filteredList.length ? 
          <Category productList={filteredList} />
          : <h3 className="not-found">Product not Found</h3>
      }
    </div>
  );
};

const mapStateToprops = ({ productReducer: { searchValue, productList } }: any) => ({ 
  searchValue,
  productList
});

const mapDispatchToProps = (dispatch: any) => ({
  getProductList: () => dispatch(getProductList())
})

export default connect(mapStateToprops, mapDispatchToProps)(Home);
