import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";
import { useLocalStorage } from "./helpers/useLocalStorage";

function App() {
  const defContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useLocalStorage("contacts", defContacts);
  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    const contactObj = {
      id: nanoid(),
      name,
      number,
    };
    setContacts((prev) => [...prev, contactObj]);
  };

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox handleFilter={handleFilter} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </>
  );
}

export default App;
