import React from 'react';
import { connect } from 'react-redux';

import { setSearchValue } from '../../redux/actions/product.action';

import './search-box.style.scss';

function SearchBox({ searchValue, setSearchValue }: any) {

  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => 
    setSearchValue(value)

  return (
    <div className="search-box">
      <div className="back-icon">
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="search-input">
        <input 
          value={searchValue}
          onChange={onChange} 
          type="search" 
          placeholder="Search by category, name, type"
        />
      </div>
    </div>
  );
};

const mapStateToprops = ({ productReducer: { searchValue } }: any) => ({ searchValue });

const mapDispatchToProps = (dispatch: any) => 
  ({ setSearchValue: (value: string) => dispatch(setSearchValue(value)) });

export default connect(mapStateToprops, mapDispatchToProps)(SearchBox)
