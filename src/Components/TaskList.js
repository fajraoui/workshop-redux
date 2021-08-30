import React from 'react'
import { useSelector } from 'react-redux';
import ToDo from './ToDo'

const TaskList = ()=> {
  const List = useSelector(state => state.todoReducer.List);
   const status = useSelector(state => state.todoReducer.status)
  return (
    <div>
      {status=="All"?List.map((todo) => (
        <ToDo
          key={todo.id}
          Task={todo}
        />
      )):status=="Done"?List.filter(el=>el.isDone==true).map((todo) => (
        <ToDo
          key={todo.id}
          Task={todo}
        />)):List.filter(el=>el.isDone==false).map((todo) => (
          <ToDo
            key={todo.id}
            Task={todo}/>))}
    </div>
  );
};

export default TaskList
