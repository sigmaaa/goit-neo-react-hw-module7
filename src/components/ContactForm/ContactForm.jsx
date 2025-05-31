import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const initialValues = {
  contactName: "",
  phone: "",
};
const ContactFormScheme = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.contactName,
        number: values.phone,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormScheme}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label className={css.fieldLabel}>Name</label>
          <Field
            className={css.fieldInput}
            type="text"
            name="contactName"
          ></Field>
          <ErrorMessage name="contactName" component="span" />
        </div>
        <div className={css.field}>
          <label className={css.fieldLabel}>Number</label>
          <Field className={css.fieldInput} type="tel" name="phone"></Field>
          <ErrorMessage name="phone" component="span" />
        </div>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
