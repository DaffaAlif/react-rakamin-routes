import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex justify-between w-[100vw] pl-32'>{children}</div>
  )
}

export default AuthLayout