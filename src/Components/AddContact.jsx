import React, { useEffect, useRef, useState } from 'react';
import MyContext from '../Context/Context';
import { useContext } from 'react';

function AddContact({ showAddContact, handleCloseAddContact }) {
  //State for Form
  /* const {formData,setFormData} = useContext(MyContext); //so se pode chamar uma vez? */
  //Post Method Unpacking
  const {postData,fetchData,formData,setFormData,updateContact} = useContext(MyContext); //Unpack post and Fetch
  const formRef = useRef(null);

  useEffect(() => {
    if (showAddContact) {
      formRef.current.focus();
    }
  }, [showAddContact]);

  if (!showAddContact) return null;

  //Handles change in all input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  //Save handler
  const handleSave = () => {
    console.log("Data to Save", formData);
    if (formData.id) {  
      updateContact(formData); 
    } else {
      postData(formData);
    }
    handleCloseAddContact();
    fetchData();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', 
        zIndex: 1050,
        overflowY: 'auto',
      }}
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="custom-form p-4 rounded"
        tabIndex={0}
        ref={formRef}
        style={{
          width: '90%',
          maxWidth: '600px',
          outline: 'none',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="row text-center mb-3">
          <h1>{formData.id ? "Edit Contact" : "Add New Contact"}</h1>
          <button 
            type="button" 
            className="btn-close" 
            onClick={handleCloseAddContact} 
            aria-label="Close"
          ></button>
        </div>
        <div className="row mb-3">
          <label htmlFor="name" className="form-label"><strong>Full Name</strong></label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="form-label"><strong>Email</strong></label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="row mb-3">
          <label htmlFor="phone" className="form-label"><strong>Phone</strong></label>
          <input 
            type="tel" 
            className="form-control" 
            id="phone" 
            placeholder="961234567"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="row mb-3">
          <label htmlFor="address" className="form-label"><strong>Address</strong></label>
          <input 
            type="text" 
            className="form-control" 
            id="address" 
            placeholder="Your Address here..."
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="row py-1">
          <button className="btn btn-primary me-2 my-3" onClick={handleSave}>{formData.id ? "Update" : "Save"}</button>
          <button className="btn btn-secondary" onClick={handleCloseAddContact}>Close</button>
          {/* Maybe this could do it with Router */}
          <a href="#" onClick={handleCloseAddContact} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
            Back to Contacts
          </a>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
