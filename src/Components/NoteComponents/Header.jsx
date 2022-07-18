import React from 'react'

function Header(props) {
  return (
    <div className='header'>
        <h1 className='notes__title'>Notes</h1>
        <h3 className='notes__amount'>You have {props.amount > 1 ? props.amount + " Notes" : props.amount + " Note" }</h3>
    </div>
  )
}

export default Header