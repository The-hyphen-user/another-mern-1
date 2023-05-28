import React from 'react';
import './App.css';
import Task from "./components/Task";
import TaskCreator from './components/TaskCreator';
import {useState, useEffect} from "react";

function App() {
  const [tasks, setTasks] = useState([
    {title: 'Task 1', text: 'This is task 1'},
    { title: 'Task 2', text: 'This is task 2'},
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:5000/tasks/");
      const body = await result.json();
      console.log(body);
      setTasks(body);
    };
    fetchData();
  }, []);

  const deleteTask = async (title:string) => {
    const result = await fetch('http://localhost:5000/tasks/', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title: title}),
      });
      const response = await result;
      if (response.status !== 200) {
        throw Error(response.statusText);
      } else {
        setTasks(tasks.filter((task) => task.title !== title));
      }

    }


       const createTask = async (title:string, text:string) => {
        if (title === "" || text === "" ) {
          return;
        }
        if (tasks.some((task) => task.title === title)) {
          return;
        }
        const result = fetch('http://localhost:5000/tasks/', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },body: JSON.stringify({title: title, text: text}),
          });
          const response = await result;
          if (response.status !== 200) {
            throw Error(response.statusText);
          } else {
            setTasks([...tasks, {title: title, text: text}]);
          }

        }




  return (
    <div className="App">
      <header className="App-header">
          Learn React
          <br/>
          <TaskCreator createTask={createTask}/>
          <br/>
          <div>
          {tasks.map((task) => (
              <Task 
              key={task.title}
              title={task.title}
              text={task.text}
              deleteSelf={deleteTask}
              />
          ))}
          </div>
      </header>
    </div>
  );
}

export default App;
