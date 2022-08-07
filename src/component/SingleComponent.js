import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SingleComponent = ({item}) => {
    const [clicked, setClicked] = useState(false)
    const hasChildren = item.branches.length > 0
    // console.log(hasChildren);
    const handleClick = () => {
        setClicked(true)
    }
  return (
        <div onClick={handleClick} style={{cursor: 'pointer', paddingLeft: "2rem",display: 'block' }}>
       
        {hasChildren && <KeyboardArrowRightIcon />}
        {item.label}
        {(clicked && hasChildren) ? item.branches.map((branch) => <SingleComponent key={branch.id} item={branch} />) : null}
      
        </div>
  )
}

export default SingleComponent