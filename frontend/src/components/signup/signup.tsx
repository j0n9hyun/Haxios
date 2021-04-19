import React, { useState, useRef } from 'react';
import '../../static/signup.scss';
import axios from 'axios';
import { useHistory, Link, withRouter } from 'react-router-dom';
import title from '../../static/title.svg';
import { registerState } from '../atoms/authState';
const Signup = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState(0);
  const history = useHistory();
  const ref = useRef<any>();

  const onChangeId = (e: any) => {
    setId(e.currentTarget.value);
  };

  const onChangePw = (e: any) => {
    setPw(e.currentTarget.value);
  };

  const onChangeConfirmPw = (e: any) => {
    setConfirmPw(e.currentTarget.value);
  };

  const onChangeName = (e: any) => {
    setName(e.currentTarget.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (pw !== confirmPw) {
      setStatus(1);
      ref.current.focus();
      ref.current.style.border = '2px solid #ff6b6b';
      return false;
    }
    const call = async () => {
      await axios;
      registerState(id, pw, name)
        .then((res) => {
          if (res.success) {
            history.push('/login');
          } else {
            console.log('회원가입 실패');
          }
        })
        .catch((err) => console.log(err));
    };
    call();
  };

  return (
    <>
      <div className='signup-page-container'>
        <div className='signup-wrapper register'>
          <figure style={{ marginTop: '20px' }}>
            <img src={title} alt='' />
          </figure>
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
                value={pw}
                ref={ref}
              />
            </div>
            <div className='signup-input-text'>Confirm</div>
            <div className='signup-input pw'>
              <input
                type='password'
                placeholder='비밀번호 확인'
                onChange={onChangeConfirmPw}
                value={confirmPw}
              />
            </div>
            <div className='signup-input-text'>Name</div>
            <div className='signup-input pw'>
              <input
                type='text'
                placeholder='이름'
                onChange={onChangeName}
                value={name}
              />
            </div>
            <div className='signup-button'>
              <button>회원가입</button>
            </div>
            <div className='link-to'>
              <Link to='/login'>로그인 화면으로 돌아가기</Link>
            </div>
          </form>
          {status === 1 ? <div> password incorrect </div> : null}
        </div>
      </div>
    </>
  );
};

export default withRouter(Signup);
