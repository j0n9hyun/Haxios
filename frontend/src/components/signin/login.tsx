import React, { useEffect, useRef } from 'react';
import '../../static/home.scss';
import { withRouter } from 'react-router-dom';
import {
  idState,
  modalLState,
  modalState,
  pwState,
  Reset,
  submitState,
  tokenState,
  csrfTokenSelector,
} from '../atoms/authState';
import { useRecoilState, useRecoilValue } from 'recoil';
import title from '../../static/title.svg';

const Login = ({ handleModalLogin }: any) => {
  const [id, setId] = useRecoilState(idState);
  const [pw, setPw] = useRecoilState(pwState);
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalState);
  const [modalIsOpenL, setModalIsOpenL] = useRecoilState(modalLState);
  const [csrfToken, setCsrfToken] = useRecoilState(tokenState);
  const token = useRecoilValue(csrfTokenSelector);

  const { resetId, resetPw } = Reset();
  const ref = useRef<any>();

  const onChangeId = (e: any) => {
    setId(e.currentTarget.value);
  };

  const onChangePw = (e: any) => {
    setPw(e.currentTarget.value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    submitState(id, pw, csrfToken).then((res) => {
      resetId();
      resetPw();
      res.loginSuccess ? window.location.reload() : ref.current.focus();
    });
  };

  const onClickRegister = () => {
    setModalIsOpen(!modalIsOpen);
    setModalIsOpenL(!modalIsOpenL);
  };

  useEffect(() => {
    ref.current.focus();
    setCsrfToken(token);
  }, [setCsrfToken, token]);

  return (
    <>
      <div className='Signup' onClick={handleModalLogin}>
        <div
          className='signup-page-container'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='signup-wrapper'>
            <figure style={{ marginTop: '20px' }}>
              <img src={title} alt='' />
            </figure>
            <div className='signup-header'>
              Sign In
              <div className='signup-header-subtitle'>로그인 페이지</div>
            </div>
            <form className='signup-input' onSubmit={onSubmit}>
              {/* <input type='hidden' name='_csrf' value={csrfToken} /> */}
              <div className='signup-input-text'>ID</div>
              <div className='signup-input id'>
                <input
                  type='text'
                  placeholder='아이디'
                  onChange={onChangeId}
                  value={id}
                  ref={ref}
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
                <br />
                <div className='link-to'>
                  <div onClick={onClickRegister}>회원가입</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
