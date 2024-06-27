import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={s.contact_list}>
      {filteredContacts.map((contact) => (
        <Contact
          name={contact.name}
          id={contact.id}
          number={contact.number}
          key={contact.id}
        />
      ))}
    </ul>
  );
};
export default ContactList;
