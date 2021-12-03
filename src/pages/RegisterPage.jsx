import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container';
import { register } from '../services/fluffy-broccoli';
import useInput from '../hooks/useInput';
//#m
//n/
//id
//re_
//</Input>
//'text'e
//errors['username'] //Имя пользователя namenameInput
//text-lg{
//H
///
//useN
const Field = ({ errors, name, label, ...props }) => {
  const isError = !!(errors && errors[name]);
  return (
    <div>
      <label
        htmlFor={name}
        className={`${''}${isError ? ' text-red-600' : ''}`}
      >
        {label}
      </label>
      <Input {...props} name={name} isError={isError} />
      {isError && (
        <ul>
          {errors[name].map((error) => (
            <li className='text-red-600 text-sm'>{error}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Input = ({
  type = 'text',
  input,
  isDisabled = false,
  isError = false,
  name,
}) => {
  return (
    <input
      {...input}
      type={type}
      id={name}
      disabled={isDisabled}
      className={`${'w-full text-base px-1 py-1 border-b '}${
        isError ? 'border-red-600' : ''
      }`}
    />
  );
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const nameInput = useInput('');
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const re_passwordInput = useInput('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const username = nameInput.value,
      email = emailInput.value,
      password = passwordInput.value,
      re_password = re_passwordInput.value;

    if (
      username.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      re_password.trim() === ''
    ) {
      return;
    }
    setIsLoading(true);
    register({ username, email, password, re_password })
      .then((res) => {
        navigate('/signin?registerSuccess=true');
      })
      .catch((err) => {
        setIsLoading(false);
        setErrors(err?.response?.data);
        console.log(err.response.data);
      });
  }; //[]
  ////ppii err
  return (
    <div className='flex w-full min-h-screen items-center justify-center p-4'>
      <form
        onSubmit={onSubmit}
        className='w-full max-w-md border p-4 shadow-md'
      >
        <h3 className='text-center text-xl'>Регистрация</h3>
        {errors && errors['non_field_errors'] && (
          <ul>
            {errors['non_field_errors'].map((error) => (
              <li className='text-red-600 text-sm'>{error}</li>
            ))}
          </ul>
        )}
        <Field
          errors={errors}
          label={'Имя пользователя'}
          name='username'
          input={nameInput}
          isDisabled={isLoading}
        />
        <Field
          errors={errors}
          label={'Эл. почта'}
          name='email'
          input={emailInput}
          isDisabled={isLoading}
          type='email'
        />
        <Field
          errors={errors}
          label={'Пароль'}
          name='password'
          input={passwordInput}
          isDisabled={isLoading}
          type='password'
        />
        <Field
          errors={errors}
          label={'Пароль ещё раз'}
          name='re_password'
          input={re_passwordInput}
          isDisabled={isLoading}
          type='password'
        />
        <button
          disabled={isLoading}
          className='border border-black w-full mt-4 py-1 text-lg hover:bg-black hover:text-white transition-colors duration-200'
        >
          Зарегистрироваться
        </button>
        {/* <p></p>
        <p></p> */}
      </form>
    </div>
  );
};

export default RegisterPage;
