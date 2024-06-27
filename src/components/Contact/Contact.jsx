/* eslint-disable react/prop-types */
import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id, name, number, handleDelete }) => {
  return (
    <li key={id} className={s.contact_item}>
      <div>
        <p className={s.name}>
          <FaUser color="white" />
          &nbsp; &nbsp;
          {name}
        </p>
        <p>
          <FaPhoneAlt color="white" />
          &nbsp; &nbsp;
          {number}
        </p>
      </div>
      <button className={s.delete_btn} onClick={() => handleDelete(id)}>
        delete
      </button>
    </li>
  );
};
export default Contact;
