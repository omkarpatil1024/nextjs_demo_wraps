import React from 'react'

const SingleUser=async({params}:any)=> {
  return (
    <div>Hello {params.username}</div>
  )
}

export default SingleUser