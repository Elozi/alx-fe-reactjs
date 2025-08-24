// src/components/FormikForm.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = (values) => {
    // Simulate API call
    console.log('Formik Form submitted:', values);
    alert('User registered successfully (Formik)!');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <h2>Register (Formik)</h2>

        <div>
          <label>Username</label>
          <Field name="username" />
          <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
        </div>

        <div>
          <label>Email</label>
          <Field name="email" />
          <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
        </div>

        <div>
          <label>Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
