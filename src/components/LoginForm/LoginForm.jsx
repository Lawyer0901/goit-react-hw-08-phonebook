import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth.operation';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialState = {
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
    dispatch(login(values));
    setIsLoading(false);
    // setValues(initialState);
  };

  return (
    <>
      {isLoading && <Loader />}
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
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
        <button onSubmit={handleSubmit}>Login</button>
      </form>
    </>
  );
};
