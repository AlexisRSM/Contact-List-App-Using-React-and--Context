import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Contacts from './Components/Contacts'
/* import TalkToAPI from './Components/Talk_to_API' */
import MyContext from './Context/Context'

//-----------------------------------Fetch Data-------------------------------------------------
function App() {
  const URL = "https://playground.4geeks.com/contact/agendas/Ralfe"; 
  const [contacts,setContacts]= useState([]);

  async function fetchData () {
    try{
        const response = await fetch(URL,{
          method:'GET'
        });
        //debug------
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        const jsonData = await response.json();
        //Now put the data into code and manipulate
        //print json data
        console.log(jsonData);
        const contactsArray = jsonData.contacts;
        setContacts(contactsArray);
        console.log(contactsArray);

    }catch(error) {
        console.log("On FetchData Fuction: ",error);
    }

    useEffect(()=>{
      fetchData();

    },[])
  return (
    <>
      <MyContext.Provider value={{contacts,setContacts}}>
        <Contacts/>
      
      </MyContext.Provider>
    </>
  )
}}

export default App;
