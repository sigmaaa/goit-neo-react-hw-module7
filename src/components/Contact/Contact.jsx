import css from "./Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.listItem}>
      <div>
        <p>
          <IoMdContact className={css.nameIcon} size={18} />
          {data.name}
        </p>
        <p>
          <FaPhoneAlt className={css.phoneIcon} size={16} />
          {data.number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(data.id))}>Delete</button>
    </div>
  );
};

export default Contact;
