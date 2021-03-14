import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from './TodoList'
  
var destination = document.querySelector("#list-container");
var centerAlign = { textAlign: 'center' }
  
ReactDOM.render(
    <div>
        <h1 style={ centerAlign }>🍊 Let's Get Things Done! 🍊</h1>
        <h4>
            Get an inspirational quote, add todo items, double click on an item to complete it!
        </h4>
        <TodoList />
        <p>Created with 🍊 by Subin Kim</p>
    </div>,
    destination
);