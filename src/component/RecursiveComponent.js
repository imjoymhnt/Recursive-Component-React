import React from 'react'
import SingleComponent from './SingleComponent'

const RecursiveComponent = ({data}) => {
 
  return (
    <div>
        {data.map(item => <SingleComponent item={item} />)}
    </div>
  )
}

export default RecursiveComponent