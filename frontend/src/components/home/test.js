import React from 'react';
import './test.scss';
import '../../static/signup.scss';
const Test = ({ handleModal }) => {
  return (
    <>
      <div className='Signup' onClick={handleModal}>
        <div
          className='signup-page-container'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='signup-wrapper register'>
            <figure style={{ marginTop: '20px' }}>
              <img src='' alt='' />
            </figure>
            <div className='signup-header'>
              Sign Up
              <div className='signup-header-subtitle'>회원가입 페이지</div>
            </div>
            <form className='signup-input'>
              <div className='signup-input-text'>ID</div>
              <div className='signup-input id'>
                <input
                  type='text'
                  placeholder='아이디'
                  // onChange={onChangeId}
                  // value={id}
                />
              </div>
              <div className='signup-input-text'>Password</div>
              <div className='signup-input pw'>
                <input
                  type='password'
                  placeholder='비밀번호'
                  // onChange={onChangePw}
                  // value={pw}
                  // ref={ref}
                />
              </div>
              <div className='signup-input-text'>Confirm</div>
              <div className='signup-input pw'>
                <input
                  type='password'
                  placeholder='비밀번호 확인'
                  // onChange={onChangeConfirmPw}
                  // value={confirmPw}
                />
              </div>
              <div className='signup-input-text'>Name</div>
              <div className='signup-input pw'>
                <input
                  type='text'
                  placeholder='이름'
                  // onChange={onChangeName}
                  // value={name}
                />
              </div>
              <div className='signup-button'>
                <button>회원가입</button>
              </div>
              <div className='link-to'>
                {/* <Link to='/login'>로그인 화면으로 돌아가기</Link> */}
              </div>
            </form>
            {/* {status === 1 ? <div> password incorrect </div> : null} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
