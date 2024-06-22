import React from 'react';

function AddContact({ showAddContact, handleCloseAddContact }) {
    
    return (
        <div style={{ display: showAddContact ? 'block' : 'none' }} className="custom-form mx-5">
            <div className="row text-center">
                <h1>Add New Contact</h1>
                <button type="button" className="btn-close" onClick={handleCloseAddContact} aria-label="Close"></button>
            </div>
            <div className="row name">
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label"><strong>Full Name</strong></label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Full Name" />
                </div>
            </div>
            <div className="row">
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label"><strong>Email</strong></label>
                    <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                </div>
            </div>
            <div className="row">
                <div className="mb-3">
                    <label htmlFor="phoneInput" className="form-label"><strong>Phone</strong></label>
                    <input type="tel" className="form-control" id="phoneInput" placeholder="969969969" />
                </div>
            </div>
            <div className="row">
                <div className="mb-3">
                    <label htmlFor="addressInput" className="form-label"><strong>Address</strong></label>
                    <input type="text" className="form-control" id="addressInput" placeholder="Your Address here..." />
                </div>
            </div>
            <div className="row">
                <button className="btn btn-primary" onClick={handleCloseAddContact}>Save</button>
                <button className="btn btn-secondary" onClick={handleCloseAddContact}>Close</button>
            </div>
        </div>
    );
}

export default AddContact;
