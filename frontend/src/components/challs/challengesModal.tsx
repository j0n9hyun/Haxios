import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../../static/home.scss';
import { withRouter } from 'react-router-dom';
import title from '../../static/title.svg';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  authenticationSeletor,
  challsModalState,
  solvedState,
  checkState,
} from '../atoms/authState';
import axios from 'axios';

const ChallengeModal = ({
  handleModal,
  challId,
  challTitle,
  challPoint,
  challCategory,
  challDesc,
}: // challFlag,
any) => {
  const [answer, setAnswer] = useState('');
  const setSolved = useSetRecoilState(solvedState);
  const [challsModal, setChallsModal] = useRecoilState(challsModalState);
  const userId = useRecoilValue(authenticationSeletor);
  const setCheck = useSetRecoilState(checkState);
  const ref = useRef<any>();

  async function SubmitData() {
    setSolved(1);
    const response: any = await axios.post(`api/users/submit/${userId._id}`, {
      solved: challId,
      flag: answer,
    });
    setCheck({ checked: true, value: response.data });
    return response.data;
    // const response: any = await axios.post(`api/users/submit/${userId._id}`, {
    //   solved: challId,
    // });
    // setCheck({ checked: true, value: response.data });
    // return response.data;
  }

  const onChangeFlag = (e: any) => {
    setAnswer(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (answer) {
      console.log('마즘');
      SubmitData();
      setChallsModal(!challsModal);
      // alert('정답');
      window.location.reload();
    } else {
      console.log('틀림');
    }
  };
  const onKeypress = (e: any) => {
    if (e.key === 'Escape') {
      setChallsModal(!challsModal);
    }
  };
  useEffect(() => {
    ref.current.focus();
    // const scrollPos: any = sessionStorage.getItem('scrollPos');
    // if (scrollPos !== null) {
    //   window.scrollTo(0, scrollPos);
    // }
    // window.addEventListener('scroll', () => {
    //   sessionStorage.setItem('scrollPos', window.pageYOffset);
    // });
  }, []);

  // let flag: any = document.getElementById('asdasd');
  // console.log(flag?.value);

  return (
    <>
      <div className='Signup' onClick={handleModal}>
        <div
          className='signup-page-container'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='signup-wrapper'>
            <figure style={{ marginTop: '20px' }}>
              <img src={title} alt='' />
            </figure>
            <div className='chall-close-btn'>
              <i
                className='fas fa-times'
                onClick={() => {
                  setChallsModal(!challsModal);
                }}
              />
            </div>
            <div className='signup-header'>
              {challTitle}
              <div className='signup-header-subtitle'>
                {challPoint} {challCategory}
              </div>
            </div>
            <div className='chall-desc'>{challDesc}</div>
            <form className='signup-input' onSubmit={onSubmit}>
              <div
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  width: '100%',
                }}
              >
                <div className='signup-input-text'>정답</div>
                <div className='signup-input id'>
                  <input
                    type='text'
                    placeholder='flag'
                    value={answer}
                    onChange={onChangeFlag}
                    onKeyDown={onKeypress}
                    ref={ref}
                    // disabled={asdasd}
                    id='asdasd'
                  />
                </div>
                <div className='signup-button'>
                  <button>제출</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ChallengeModal);
