import React, { useState, useRef, useEffect } from 'react';
import '../../static/home.scss';
import { withRouter } from 'react-router-dom';
import title from '../../static/title.svg';
import {
  csrfTokenSelector,
  csrfTokenState,
  modalLState,
  modalState,
  registerState,
  tokenState,
} from '../atoms/authState';
import { useRecoilState, useRecoilValue } from 'recoil';

const Register = ({ handleModal }: any) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState(0);
  const ref = useRef<any>();

  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalState);
  const [modalIsOpenL, setModalIsOpenL] = useRecoilState(modalLState);
  const [csrfToken, setCsrfToken] = useRecoilState(tokenState);
  const token = useRecoilValue(csrfTokenSelector);

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
      document.getElementById('pwpw')?.focus();
      // ref.current.style.border = '2px solid #ff6b6b';
      return false;
    }
    const call = async () => {
      registerState(id, pw, name, csrfToken)
        .then((res) => {
          if (res.success) {
            setModalIsOpen(!modalIsOpen);
            setModalIsOpenL(!modalIsOpenL);
          } else {
            console.log('회원가입 실패');
          }
        })
        .catch((err) => console.log(err));
    };
    call();
  };

  const onClickLogin = () => {
    setModalIsOpen(!modalIsOpen);
    setModalIsOpenL(!modalIsOpenL);
  };

  useEffect(() => {
    ref.current.focus();
    setCsrfToken(token);
  }, []);

  return (
    <>
      <div className='Signup' onClick={handleModal}>
        <div
          className='signup-page-container'
          onClick={(e) => e.stopPropagation()}
        >
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
                  value={id || ''}
                  id='idid'
                  ref={ref}
                />
              </div>
              <div className='signup-input-text'>Password</div>
              <div className='signup-input pw'>
                <input
                  type='password'
                  placeholder='비밀번호'
                  onChange={onChangePw}
                  value={pw || ''}
                  id='pwpw'
                  minLength={5}
                />
              </div>
              <div className='signup-input-text'>Confirm</div>
              <div className='signup-input pw'>
                <input
                  type='password'
                  placeholder='비밀번호 확인'
                  onChange={onChangeConfirmPw}
                  value={confirmPw}
                  minLength={5}
                />
              </div>
              <div className='signup-input-text'>Nickname</div>
              <div className='signup-input pw'>
                <input
                  type='text'
                  placeholder='닉네임'
                  onChange={onChangeName}
                  value={name || ''}
                  maxLength={18}
                />
              </div>
              <div className='signup-button'>
                <button>회원가입</button>
              </div>
              <div className='link-to'>
                <div onClick={onClickLogin}>로그인 화면으로 돌아가기</div>
              </div>
            </form>
            {status === 1 ? <div> password incorrect </div> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Register);
