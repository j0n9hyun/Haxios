import React, { useState, useEffect } from 'react';
import '../../static/signup.scss';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { testState, idState, pwState } from '../atoms/authState';
import {
  useRecoilState,
  useRecoilValueLoadable,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
const Signin = () => {
  const history = useHistory();
  const [id, setId] = useRecoilState(idState);
  const [pw, setPw] = useRecoilState(pwState);
  const family = useRecoilValue(testState);
  let body = {
    email: id,
    password: pw,
  };

  // console.log(Loadable.contents);

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
        .post('api/users/login', {
          email: id,
          password: pw,
        })
        .then((res) => {
          if (res.data.loginSuccess === true) {
            console.log('success');
            history.push('/');
          } else {
            console.log('로그인 실패');
          }
        })
        .catch((err) => console.log(err));
    };
    call();
  };

  return (
    <>
      <div className='signup-page-container'>
        <div className='signup-wrapper'>
          <div className='signup-header'>
            Sign In
            <div className='signup-header-subtitle'>로그인 페이지</div>
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
                value={pw}
              />
            </div>
            <div className='signup-button'>
              <button>로그인</button>
            </div>
            <div className='link-to'>
              <Link to='/signup'>회원가입</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
