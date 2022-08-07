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
    
        <span onClick={handleClick} style={{cursor: 'pointer', paddingLeft: "2rem", display: 'block' }}>
        {hasChildren && <KeyboardArrowRightIcon />}
        {item.label}
        {(clicked && hasChildren) ? item.branches.map((branch) => <SingleComponent item={branch} />) : null}
        </span>
    
  )
}

export default SingleComponent