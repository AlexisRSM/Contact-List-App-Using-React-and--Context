import { useEffect, useState } from "react";
import MyContext from "../Context/Context";
import { useContext } from "react";
/* import TalkToAPI from "./Talk_to_API"; */



function Contacts() {
    //const [contacts,setContacts]= useState([]);
   /*  const {contacts,setContacts}=useContext(MyContext); */

/* console.log("Did I get my Data?",contacts); */
    
    return ( 
        <div className="row">
            <img src="https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg" />
        </div>
    );
}

export default Contacts;