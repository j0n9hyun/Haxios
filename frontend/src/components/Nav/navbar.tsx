import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoginState, logoutState } from '../atoms/authState';
import Login from '../signin/login';
import Register from '../signup/register';

const Navbar = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenL, setModalIsOpenL] = useState(false);

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
        alert('failed');
      }
    });
  };
  return (
    <div>
      {isLogin === true ? (
        <div className='login-wrapper'>
          <div className='login-button'>
            <Link to='/profile'>프로필</Link>
          </div>
          <div className='login-button' onClick={onClickLogout}>
            로그아웃
          </div>
        </div>
      ) : (
        <div className='login-wrapper'>
          <div className='login-button' onClick={handleModalLogin}>
            로그인
            {/* <Link to='/login'>
              </Link> */}
          </div>
          <div className='register-button' onClick={handleModal}>
            회원가입
            {/* <Link to='/register'>회원가입</Link> */}
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
