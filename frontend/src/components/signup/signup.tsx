import React from 'react';
import '../../static/signup.scss';
const Signup = () => {
  return (
    <>
      <div className='signup-page-container'>
        <div className='signup-wrapper'>
          <div className='signup-header'>
            Sign Up
            <div className='signup-header-subtitle'>회원가입 페이지</div>
          </div>
          <form className='signup-input'>
            <div className='signup-input-text'>ID</div>

            <div className='signup-input id'>
              <input type='text' placeholder='아이디' />
            </div>
            <div className='signup-input-text'>Password</div>
            <div className='signup-input pw'>
              <input type='password' placeholder='비밀번호' />
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
