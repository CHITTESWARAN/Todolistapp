clear
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Additem = ({newItem,setNewItem,handleSubmit}) => {
  return (
   <form className='addForm' onSubmit={handleSubmit}>
    <label htmlfor="additem">AddItem</label>
    <input id= 'addItem'
    type="text" 
    autoFocus 
    placeholder='Add item'
    required 
    value={newItem}
    onChange={(e)=>setNewItem(e.target.value)}/>
    <button type= 'submit'aria-label='Add Item'><FaPlus/></button>
   </form>
  )
}

export default Additem