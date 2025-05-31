import ContactList from "../ContactList/ContactList";
import "./App.css";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contactsOps";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { selectError } from "../../redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Loader />
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ContactForm></ContactForm>
      <SearchBox></SearchBox>
      <ContactList />
    </div>
  );
}

export default App;
