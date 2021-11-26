import React from 'react'
import Button from './Button'

const QuantitySelector = ({
  handleRemoveItemButton,
  handleAddItemButton,
  displayedValue
}) => {
  return (
    <div className='quant_selector'>
      <Button handleClick={handleAddItemButton} buttonLabel={'+'} />
      <p>{displayedValue}</p>
      <Button handleClick={handleRemoveItemButton} buttonLabel={'-'} />
    </div>
  )
}

export default QuantitySelector
