"use client"

import React, { useContext } from 'react'
import { AuthenticationContext } from '../context/AuthContext'

const AddReview = () => {
  const { data } = useContext(AuthenticationContext)
  console.log(data)
  return (
    <>
      { data ? (<p className='cursor-pointer'>AddReview</p>) : (<></>)
      }
    </>
  )
}

export default AddReview