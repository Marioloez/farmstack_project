// @bekbrace
// FARMSTACK Tutorial - Sunday 13.06.2021
 
// import React, { useState, useEffect} from 'react';
// // import './App.css';
// import TodoView from './components/TodoListView';
// import axios from 'axios'; 

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {About} from './components/About';
import {Users} from './components/Users';
import {Navbar} from './components/Navbar'

// import 'bootswatch/dist/flatly/bootstrap.min.css';
function App() {
  //   const [todoList, setTodoList] = useState([{}])
  //   const [title, setTitle] = useState('')
  //   const [desc, setDesc] = useState('')

  //   // Read all todos
  //   useEffect(() => {
  //     axios.get('http://localhost:8000/api/todo')
  //       .then(res => {
  //         setTodoList(res.data)
  //       })
  //   });

  //   // Post a todo
  //   const addTodoHandler = () => {
  //     axios.post('http://localhost:8000/api/todo/', { 'title': title, 'description': desc })
  //       .then(res => console.log(res))
  // };

  return (
    <Router>
      <Navbar/>
      <div className="container p-4">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Users} />
        </Switch>
      </div>
    </Router>
  );
} 
export default App;