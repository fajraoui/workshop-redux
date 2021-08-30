import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  Input } from "semantic-ui-react";
import{addtask}from "../redux/action/action"
const AddTask = () => {
  const dispatch=useDispatch();
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (desc.length<=3) {alert("oops min 3 chars")} else 
   {
     dispatch(addtask({ id: Date.now(), description: desc, isDone: false }));
     setDesc("");
   }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          focus
          placeholder="Add..."
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
