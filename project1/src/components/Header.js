import React from 'react'

const Header = (props) => {
   const headerstyle={backgroundColor:'black',color:'white'}
  return (
     <header style={headerstyle}>
        <h1>{props.title}</h1>
     </header>
  )
}
Header.defaultProps={
   title:"todolist"

}
export default Header