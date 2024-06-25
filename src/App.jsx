import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Contacts from './Components/Contacts'
/* import TalkToAPI from './Components/Talk_to_API' */
import MyContext from './Context/Context'
import AddContact from './Components/AddContact'

//-----------------------------------Fetch Data-------------------------------------------------
function App() {
  const URL = "https://playground.4geeks.com/contact/agendas/Ralfe"; 
  const [contacts,setContacts]= useState([]);

  //AddContact.jsx handlers 
  const [showAddContact, setShowAddContact] = useState(false);

  const handleShowAddContact = () => {
      setShowAddContact(true);
  };

  const handleCloseAddContact = () => {
      setShowAddContact(false);
      fetchData();
  };

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
      <MyContext.Provider value={{contacts,setContacts,showAddContact, setShowAddContact,handleShowAddContact,handleCloseAddContact,postData}}>
        <Contacts/>

        <AddContact/>
      </MyContext.Provider>
    </>
  )
}

export default App;
