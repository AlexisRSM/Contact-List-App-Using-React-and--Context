import React, { useEffect, useRef } from 'react';

function AddContact({ showAddContact, handleCloseAddContact }) {
  const formRef = useRef(null);

  useEffect(() => {
    if (showAddContact) {
      formRef.current.focus();
    }
  }, [showAddContact]);

  if (!showAddContact) return null;

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
        backgroundColor: 'white', // Ensure the background is white
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
          <h1>Add New Contact</h1>
          <button 
            type="button" 
            className="btn-close" 
            onClick={handleCloseAddContact} 
            aria-label="Close"
          ></button>
        </div>
        <div className="row mb-3">
          <label htmlFor="nameInput" className="form-label"><strong>Full Name</strong></label>
          <input type="text" className="form-control" id="nameInput" placeholder="Full Name" />
        </div>
        <div className="row mb-3">
          <label htmlFor="emailInput" className="form-label"><strong>Email</strong></label>
          <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
        </div>
        <div className="row mb-3">
          <label htmlFor="phoneInput" className="form-label"><strong>Phone</strong></label>
          <input type="tel" className="form-control" id="phoneInput" placeholder="969969969" />
        </div>
        <div className="row mb-3">
          <label htmlFor="addressInput" className="form-label"><strong>Address</strong></label>
          <input type="text" className="form-control" id="addressInput" placeholder="Your Address here..." />
        </div>
        <div className="row py-1">
          <button className="btn btn-primary me-2 my-3" onClick={handleCloseAddContact}>Save</button>
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
