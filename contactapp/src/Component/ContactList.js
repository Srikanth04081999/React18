import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  // console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return <div className="ui celled list">
    <h2>Add Contact</h2>
    <h3>Contact List 
    <Link to = "/Home"><button className="ui button blue right">Add Contacts</button></Link>
    </h3>

    
    {renderContactList}</div>;
};

export default ContactList;