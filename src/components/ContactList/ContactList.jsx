/* eslint-disable react/prop-types */
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.contact_list}>
      {contacts.map((contact) => (
        <Contact
          name={contact.name}
          id={contact.id}
          number={contact.number}
          key={contact.id}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
export default ContactList;
