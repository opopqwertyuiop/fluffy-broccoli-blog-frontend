import React from 'react';
import { Link } from 'react-router-dom';

import useInput from '../hooks/useInput';
import logo from '../images/logo.jpg';
import searchIcon from '../images/search.png';
import Container from './Container';
//flex''l
const Header = () => {
  const search = useInput('');
  const onClearClick = () => {
    search.onChange({ target: { value: '' } });
  };
  return (
    <header style={{ borderBottom: '1px solid #e3e3e3' }} className='py-3'>
      <Container className='flex'>
        <div className='flex-shrink-0'>
          <Link to='/' className='flex items-center'>
            <span className='md:hidden text-3xl font-bold hover:text-red-400'>
              Fluffy
            </span>
            <img src={logo} width='50' height='56' alt='' />
            <span className='md:hidden text-3xl font-bold hover:text-red-400'>
              Broccoli
            </span>
          </Link>
        </div>
        <div className='flex items-center mx-5 flex-grow relative'>
          <input
            className='h-9 text-lg pl-9 pr-24 rounded-xl w-full bg-gray-100'
            placeholder='Найти...'
            {...search}
            type='text'
          />
          <img
            className='absolute left-2'
            src={searchIcon}
            width='24'
            height='24'
            alt=''
          />
          {search.value.trim() !== '' && (
            <div className='absolute right-0 h-9 flex'>
              <button className='w-9 relative' onClick={onClearClick}>
                <span
                  style={{ height: '1px' }}
                  className='absolute inline-block top-1/2 left-1/2 w-4 bg-gray-500 transform -translate-x-1/2 -translate-y-1/2 rotate-45'
                ></span>
                <span
                  style={{ height: '1px' }}
                  className='absolute inline-block top-1/2 left-1/2 w-4 bg-gray-500 transform -translate-x-1/2 -translate-y-1/2 -rotate-45'
                ></span>
              </button>
              <button className='text-blue-600 pr-4 font-medium'>Найти</button>
            </div>
          )}
        </div>
        <div className='flex items-center'>
          <ul className='flex'>
            <li className='mr-4'>
              <Link
                className='text-blue-600 font-semibold hover:text-red-400'
                to='/signun'
              >
                Регистрация
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-600 font-semibold hover:text-red-400'
                to='/signip'
              >
                Войти
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
