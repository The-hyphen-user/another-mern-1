import React from 'react'
import { useState } from 'react'

const Task = ({title, text, deleteSelf}) => {


  const onClick = () => {
    console.log('click')
    deleteSelf(title)
  }
  return (
    <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <button onClick={onClick}> X</button>
    </div>
  )
}

export default Task