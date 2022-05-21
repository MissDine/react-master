import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import AddContact from "./AddContact";

function App() {
    const [contacts, setContacts] = useState([])

  return (
    <div>
      <Header />
      <AddContact />
      <ContactCard />
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
