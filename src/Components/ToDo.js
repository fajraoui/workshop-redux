import React from 'react'
import { Button } from 'semantic-ui-react';
import EditeTask from './EditeTask';
import{removetask,toggle}from '../redux/action/action';
import { useDispatch } from 'react-redux';

const ToDo = ({ Task }) => {
  const dispatch=useDispatch()
  return (
    <div>
      <h1 style={{ color: "white" }} className={Task.isDone?"Done":""}> {Task.description}</h1>

      <Button.Group>
        <Button basic color="red" onClick={()=>dispatch(removetask(Task.id))}>
          Remove
        </Button>
        <EditeTask Task={Task} />
        <Button onClick={()=>dispatch(toggle(Task.id))} basic color="blue">
          {Task.isDone ? "Done" : "Undone"}

        </Button>
      </Button.Group>
    </div>
  );
};

export default ToDo
