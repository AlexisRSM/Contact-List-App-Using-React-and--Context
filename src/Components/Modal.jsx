import React, { useContext } from 'react';
import MyContext from '../Context/Context';


function Modal({ show, handleClose, contactId }) {
  const {deleteContact} = useContext(MyContext);
  const handleDelete = () =>{
    deleteContact(contactId);
    handleClose();
  }
  return (
    <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Are you Sure?</h5>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>If you delete this thing the intire Universe will go down!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleClose}>Oh no!</button>
            <button type="button" className="btn btn-secondary" onClick={handleDelete}>Yes baby!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
