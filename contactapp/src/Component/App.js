import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
          <Header />
     <Router>
      <Switch>

        
        <Route
        path="/Home"
        exact
        render = 
        {(props) => (<AddContact
          {...props}
          addContactHandler={addContactHandler}
          
          />)}
        
        />
        <Route
        path="/main"
        exact
        render = 
        {(props) => (<ContactList
          {...props}
          contacts={contacts} getContactId={removeContactHandler}
          />)}
        
        />
        <Route
        path="/contact/:id"
        component={ContactDetails}
        
        />
             </Switch>
     </Router>

      {/* <Header/>  */}
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      <ContactDetails/> */}

    

    </div>
  );
}

export default App;