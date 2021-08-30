import React, { useState } from 'react'
import {  Modal ,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { edittask } from '../redux/action/action';

const EditeTask = ({ Task, handleEdit }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newdesc, setNewdesc] = useState(Task.description);
  const dispatch = useDispatch();
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <input
          type="text"
          value={newdesc}
          onChange={(e) => setNewdesc(e.target.value)}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(edittask(Task.id,newdesc))    ;handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditeTask
