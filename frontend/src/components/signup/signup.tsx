import React, { useState } from 'react';
import '../../static/signup.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const history = useHistory();

  const onChangeId = (e: any) => {
    setId(e.currentTarget.value);
  };

  const onChangePw = (e: any) => {
    setPw(e.currentTarget.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const call = async () => {
      await axios
        .post('http://localhost:5000/api/users/register', {
          email: id,
          password: pw,
        })
        .then((res) => history.push('/'))
        .catch((err) => console.log(err));
    };
    call();
  };

  return (
    <>
      <div className='signup-page-container'>
        <div className='signup-wrapper'>
          <div className='signup-header'>
            Sign Up
            <div className='signup-header-subtitle'>회원가입 페이지</div>
          </div>
          <form className='signup-input' onSubmit={onSubmit}>
            <div className='signup-input-text'>ID</div>

            <div className='signup-input id'>
              <input
                type='text'
                placeholder='아이디'
                onChange={onChangeId}
                value={id}
              />
            </div>
            <div className='signup-input-text'>Password</div>
            <div className='signup-input pw'>
              <input
                type='password'
                placeholder='비밀번호'
                onChange={onChangePw}
              />
            </div>
            <div className='signup-button'>
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
