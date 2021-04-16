import React, { useRef } from 'react';
import '../../static/signup.scss';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { idState, pwState, Reset, submitState } from '../atoms/authState';
import { useRecoilState } from 'recoil';
const Signin = () => {
  const history = useHistory();
  const [id, setId] = useRecoilState(idState);
  const [pw, setPw] = useRecoilState(pwState);
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
    try {
      await submitState(id, pw).then((res) => {
        resetId();
        resetPw();
        if (res.loginSuccess) {
          history.push('/');
        } else {
          ref.current.focus();
          console.log('login failed');
        }
      });
    } catch {
      console.log('err');
    }
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

export default withRouter(Signin);
