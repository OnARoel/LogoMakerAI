import React from 'react'
import Header from './Components/Header'

const Provider = ({children}) => {
  return (
    <>
    <div>
        <Header />
        {children}
    </div>
    </>
  )
}

export default Provider

