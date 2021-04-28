import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  isLoginState,
  logoutState,
  authenticationSeletor,
  modalState,
  modalLState,
} from '../atoms/authState';
import Login from '../signin/login';
import Register from '../signup/register';

const Navbar = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalState);
  const [modalIsOpenL, setModalIsOpenL] = useRecoilState(modalLState);

  const handleModal = (e: any) => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleModalLogin = (e: any) => {
    setModalIsOpenL(!modalIsOpenL);
  };
  const onClickLogout = () => {
    logoutState().then((res) => {
      if (res.success) {
        setIsLogin(false);
        window.location.reload();
      } else {
        window.location.reload();
      }
    });
  };

  const { name } = useRecoilValue(authenticationSeletor);
  const history = useHistory<any>();
  return (
    <div>
      <div className='welcome-user-wrapper'>
        <div className='welcome-user'>
          {name ? `${name}님! 환영합니다.` : ''}
        </div>
      </div>
      {isLogin === true ? (
        <div className='login-wrapper'>
          <div
            className='login-button'
            onClick={() => history.push('/profile')}
          >
            프로필
          </div>
          <div className='login-button' onClick={onClickLogout}>
            로그아웃
          </div>
        </div>
      ) : (
        <div className='login-wrapper'>
          <div className='login-button' onClick={handleModalLogin}>
            로그인
          </div>
          <div className='register-button' onClick={handleModal}>
            회원가입
          </div>
        </div>
      )}
      {modalIsOpen && <Register handleModal={handleModal} />}
      {modalIsOpenL && (
        <Login
          handleModalLogin={handleModalLogin}
          modalIsOpenL={modalIsOpenL}
        />
      )}
    </div>
  );
};

export default Navbar;
