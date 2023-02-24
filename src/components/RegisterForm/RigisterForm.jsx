import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/auth.operation';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const [values, setValues] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeInput = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  //   console.log(values);
  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(register(values));
    setIsLoading(false);
    setValues(initialState);
    navigate('/login');
  };

  return (
    <>
      {isLoading && <Loader />}
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          {' '}
          Name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChangeInput}
          />
        </label>
        <label htmlFor="">
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChangeInput}
          />
        </label>
        <label htmlFor="">
          Password
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChangeInput}
          />
        </label>
        <button onSubmit={handleSubmit}>Register New User</button>
      </form>
      <Link to="/login">Already have registration?</Link>
    </>
  );
};
