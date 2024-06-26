import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contacts from './Components/Contacts'
import MyContext from './Context/Context'
import AddContact from './Components/AddContact'

function App() {
  const URL = "https://playground.4geeks.com/contact/agendas/Ralfe"; 
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '', 
  });

  const [contacts,setContacts]= useState([]);

  //AddContact.jsx handlers 
  const [showAddContact, setShowAddContact] = useState(false);

  const handleShowAddContact = () => {
    setFormData({  // ######Added
      name: '',
      phone: '',
      email: '',
      address: '',
    });
    
    setShowAddContact(true);
  };

  const handleCloseAddContact = () => {
      setShowAddContact(false);
      fetchData();
  };
  //Edit Contact
  const handleEditContact = (contact) => {  // ######Added
    setFormData(contact);  // ######Added
    setShowAddContact(true);  // ######Added
  };

//Update ###Added
async function updateContact (formData){ 
  try {
    const response = await fetch(`${URL}/contacts/${formData.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.log("On PostData Function: ", error);
  }
  fetchData();
}
//Delete
async function deleteContact (id) {
  try {
    const response = await fetch(`${URL}/contacts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.status === 204) {
      console.log('Contact deleted successfully.');
    } else {
      const response = await response.json();
      console.log(`Failed to delete contact. Status code: ${response.status}`);
      console.log(`Response: ${response}`);
    }
  } catch (error) {
    console.error(error); /* experimenting console.error :D */
  }
  fetchData();
}

  async function fetchData () {
    try{
        const response = await fetch(URL,{
          method:'GET'
        });
        //debug------
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        /* console.log(response); */
        const jsonData = await response.json();
        //Now put the data into code and manipulate
        //print json data
        console.log(jsonData);
        const contactsArray = jsonData.contacts;
        setContacts(contactsArray);
        /* console.log(contactsArray); */

    }catch(error) {
        console.log("On FetchData Fuction: ",error);
    }
  }

  async function postData (FormData) {
    try{
      const response = await fetch("https://playground.4geeks.com/contact/agendas/Ralfe/contacts",{
        method:'POST',
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(FormData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }catch(error){
      console.log("On PostData Fuction: ",error);

    }
  }

    useEffect(()=>{
      fetchData();
    },[])
  return (
    <>
      <MyContext.Provider value={{contacts,setContacts,showAddContact, setShowAddContact,handleShowAddContact,handleCloseAddContact,postData,deleteContact,formData,setFormData,handleEditContact,updateContact}}>
        <Contacts/>
        <AddContact/>
      </MyContext.Provider>
    </>
  )
}

export default App;
