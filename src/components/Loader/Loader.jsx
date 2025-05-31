import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/contactsSlice";

const Loader = () => {
  const isLoading = useSelector(selectLoading);
  return isLoading ? <div>Loading...</div> : null;
};

export default Loader;
