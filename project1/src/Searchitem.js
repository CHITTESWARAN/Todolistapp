import React from 'react'

const Searchitem = ({search,setSearch}) => {
  return (
   <form className='SearchForm'onSubmit={(e)=>e.preventDefault()} >  
   <label htmlFor="search" id='search'>Search</label>
   <input type="text"
   role="searchbox"
   placeholder='Seach Items'
   value={search}
   onChange={(e)=>setSearch(e.target.value)}/>
   </form>
 
  )
}

export default Searchitem