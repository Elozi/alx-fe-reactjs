// src/App.jsx
import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  const [useFormik, setUseFormik] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={() => setUseFormik(!useFormik)}>
        Switch to {useFormik ? 'Controlled Form' : 'Formik Form'}
      </button>
      {useFormik ? <FormikForm /> : <RegistrationForm />}
    </div>
  );
}

export default App;
