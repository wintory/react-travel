import React, { PropTypes } from 'react'

const Menu = ({ provinces, onSelect }) => {
  console.log('menu',provinces)
  return (
    <div>
      {provinces.map((province,index)=>(
        <button key={index} onClick={()=>onSelect(province)}>
          {province}
        </button>
      ))}
    </div>
  )
}

export default Menu
