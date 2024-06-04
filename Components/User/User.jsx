import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-400 text-white text-4xl p-5 text-center'>
      user: {userid}
    </div>
  )
}

export default User
