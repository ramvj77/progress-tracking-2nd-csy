import React from 'react'
import PropTypes from 'prop-types';

const ItemList = ({items}) => {
  return (
    <ul>
    {items.map((item,index)=>(
        <li>{item}</li> 
  ))}
    </ul>
  );
};
ItemList.propTypes={
    items:PropTypes.arrayOf(PropTypes.string).isRequired,
};
 
export default ItemList;