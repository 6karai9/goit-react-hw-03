import { Formik, Form, Field, ErrorMessage } from 'formik';
import MaskedInput from 'react-text-mask';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'not less then 3 symbols')
      .max(50, 'not more then 50 symbols')
      .required('Required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number must be is like 123-45-67')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ ...values, id: new Date().toISOString() });
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" type="text" autoComplete="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />

          <label htmlFor="number">Number</label>
          <Field name="number">
            {({ field }) => (
              <MaskedInput
                {...field}
                id="number"
                type="tel"
                autoComplete="tel"
                mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                placeholder="123-45-67"
                className="form-control"
              />
            )}
          </Field>
          <ErrorMessage name="number" component="div" className={styles.error} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
