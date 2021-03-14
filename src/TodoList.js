import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./TodoList.css";
import FlipMove from "react-flip-move";

export default function TodoList() {
    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState([])
    const [numTasks, setNumTasks] = useState(0)
    const [quote, setQuote] = useState("")
    const [numQuotes, setNumQuotes] = useState(1)

    const handleChange = e => {
        setNewTask(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setNewTask("");
        if (newTask !== "") {
            setTasks([...tasks, newTask]);
            setNumTasks(numTasks + 1);
        }
    }

    useEffect(() => {
        axios
            .get("https://api.quotable.io/random")
            .then((res) => {
                setQuote(res.data.content + " - " + res.data.author)
            })
    }, [numQuotes]);

  return (
    <div className='todoListMain'>
        <div className='quote'>
                <h3>{quote}</h3>
        </div>
        <div className='count'>
            You have {numTasks} items on your list!
        </div>
        <form onSubmit={handleSubmit}>
        <input 
            className="todo-input"
            placeholder='Enter new task'
            type="text"
            value={newTask}
            onChange={handleChange}
        />
        <button type='submit'>Add</button>
        </form>

        <div className='tasks'>
            <FlipMove duration={250} easing="ease-out">
            {tasks.map((task, i) => (
                <div key={i}>
                    <button
                        onDoubleClick={() => {
                        const newTasks = tasks.filter((item, index) => index !== i);
                        setTasks(newTasks);
                        setNumTasks(numTasks - 1);
                        }}
                    >
                        {task}
                    </button>
                </div>
            ))}
            </FlipMove>
        </div>

    </div>
    )
}