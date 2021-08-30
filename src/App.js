import { useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from './Components/Filter';



function App() {
   
  
  
  return (
    <div style={{ height: "1000px" }} className="body">
      <div className="free">
        <h1 className="title">ToDo-List </h1>
      </div>
      <AddTask  />
      <Filter/>
      <TaskList/>
      
    </div>
  );
}

export default App;
