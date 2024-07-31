import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Phone number is not valid. Format: 123-45-67')
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
              <InputMask
                {...field}
                id="number"
                type="tel"
                autoComplete="tel"
                mask="999-99-99"
                maskChar=""
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
