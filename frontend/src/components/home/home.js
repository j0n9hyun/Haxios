import React, { useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { isLoginState, logoutState } from '../atoms/authState';
import title from '../../static/haxios.svg';
import '../../static/home.scss';
import { useRecoilState } from 'recoil';
import Modal from 'react-modal';
import Signup from '../signup/signup';
import Test from './test';

const Home = (props) => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = (e) => {
    setModalIsOpen(!modalIsOpen);
  };
  const onClickLogout = () => {
    logoutState().then((res) => {
      if (res.success) {
        setIsLogin(false);
      } else {
        alert('failed');
      }
    });
  };

  return (
    <div className='home-container'>
      <div className='home-sidebar'>
        <div className='title-wrapper'>
          <img src={title} alt='' />
        </div>
        <div className='home-sidemenu'>
          <div className='home-category'>
            <ul>
              <li className='active'>Home</li>
              <Link to='/challs'>
                <li>Challenges</li>
              </Link>
              <li>Ranking</li>
            </ul>
          </div>
        </div>
        <div className='copyright'>ⓒ 2021. j0n9hyun all rights reserved.</div>
      </div>
      {/* <div className='notification'></div>
      <div className='activity'></div> */}
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
          <div className='login-button' onClick={handleModal}>
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
      {/* <button onClick={handleModal}>모달 테스트</button> */}
      {modalIsOpen && <Test handleModal={handleModal} />}
    </div>
  );
};

export default withRouter(Home);
