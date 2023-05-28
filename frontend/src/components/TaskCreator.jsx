import React from 'react'
import { useState } from 'react'

const TaskCreator = ({createTask}) => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const onClick = () => {
        createTask(title, text)
        // createTask()
    }

  return (
    <div>
        <h1>Task Creator</h1>
        <input type='text' value={title} onChange={e=> setTitle(e.target.value)} placeholder="Title"/>
        <input type='text' value={text} onChange={e=> setText(e.target.value)} placeholder="task"/>
        <button onClick={onClick}>Create Task</button>
    </div>
  )
}

export default TaskCreator

/*
        <input type="text" placeholder="Title" onChange={e=> setTitle(e.target.value)} >{title}</input>
        <input type="text" placeholder="Task" onChange={e=> setText(e.target.value)}>{text}</input>
*/