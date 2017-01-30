import React, { PropTypes } from 'react'

const DetailList = ({ data = [] , province }) => {
  return (
    <div>
      <h1>{ province }</h1>
      {data.map((d,index)=>(
        <div key={index}>{d}</div>
      ))}
    </div>
  )
}

export default DetailList
