import { useEffect, useState } from "react";
import MyContext from "../Context/Context";
import { useContext } from "react";
import Modal from "./Modal";
import AddContact from "./AddContact";
//? ou APP JSx




function Contacts() {
    //Taking care of the State of the modal
    const [showModal,setShowModal] = useState(false);
    //Store Contact Id to delete
    const [contactIdToDelete,setToDelete] =useState(""); //string?
    //Fuctions to handle modal
    const handleShow = (contactId) =>{
        setToDelete(contactId)
        setShowModal(true);
    }
    const handleClose = () =>{
        setShowModal(false);
        setToDelete(""); //or null?
    }

    //Taking care of the state of the AddContat
    const {showAddContact,setShowAddContact}=useContext(MyContext);
    //Unpack Function to Use with AddContact does this work???  (Unpacking fuctions like this)
    const {handleShowAddContact} = useContext(MyContext);
    const {handleCloseAddContact} = useContext(MyContext);


    const {contacts,setContacts}=useContext(MyContext);
   /*  let array_names=[{name: "Ralfe Mendes", age: 26},{name:"Ines Mendes",age:28}]; */

/* console.log("Did I get my Data?",contacts); */
    
    return ( 
        <>
        <div className="row py-2 d-flex justify-content-end">
            <div className="col-3">
                <button className="btn btn-success px-5 " onClick={handleShowAddContact}>
                    Add new Contact
                </button>
            </div>
        </div>
        {contacts.map((person)=>{
            return (
                <div className="row my-2 py-3 border border-secondary" key={person.id}>
                    <div className="col-3">
                        
                            <img src="https://experteditor.com.au/wp-content/uploads/2023/07/signs-youre-a-great-person.png" className=" img-fluid rounded-circle"/> 
                    </div>
                    <div className="col-3">
                        <h5>
                            {person.name}  {/* genarete randooom key somewhere? */}
                        </h5>
                        <p>
                            <i className="bi bi-geo-alt-fill"> {person.address}</i>
                        </p>
                        <p>
                            <i className="bi bi-phone"> {person.phone}</i>
                        </p>
                        <p>
                        <i className="bi bi-envelope-at"> {person.email}</i>
                        </p>
                    </div>
                    <div className="col-3"></div>
                    <div className="col-3 d-flex justify-content-end px-5">
                        <div className="fs-5">
                            <i className="bi bi-pencil"></i>
                            <i className="bi bi-trash mx-3" onClick={()=>handleShow(person.id)}>  
                            </i> 
                        </div>
                    </div>
                </div>

            );
        })}
        <Modal show={showModal} handleClose={handleClose} contactId={contactIdToDelete}/>
        <AddContact showAddContact={showAddContact} handleCloseAddContact={handleCloseAddContact}/>
    </>
    );
}

export default Contacts;