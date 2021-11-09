import React from 'react'
import Button from './Button'

const QuantitySelector = ({ handleRemoveItemButton, displayedValue }) => {
  return (
    <div className='quant_selector'>
      <Button handleClick={handleRemoveItemButton} buttonLabel={'+'} />
      <p>{displayedValue}</p>
      <Button handleClick={handleRemoveItemButton} buttonLabel={'-'} />
    </div>
  )
}

export default QuantitySelector
