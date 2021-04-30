import React, { useEffect, useRef, useState } from 'react';
import '../../static/home.scss';
import { withRouter } from 'react-router-dom';
import title from '../../static/title.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  authenticationSeletor,
  challsModalState,
  solvedState,
} from '../atoms/authState';
import axios from 'axios';
import ChallengesEffect from './challengesEffect';

const ChallengeModal = ({
  handleModal,
  challId,
  challTitle,
  challPoint,
  challCategory,
  challDesc,
}: any) => {
  const [answer, setAnswer] = useState('');
  const [solved, setSolved] = useRecoilState(solvedState);
  const [challsModal, setChallsModal] = useRecoilState(challsModalState);
  const userId = useRecoilValue(authenticationSeletor);
  const ref = useRef<any>();
  const [firework, setFirwork] = useState(false);

  async function SubmitData() {
    await axios
      .post(`api/users/submit/${userId._id}`, {
        solved: challId,
        flag: answer,
      })
      .then((res: any) => {
        if (res.data.success) {
          setSolved(solved.concat(challId));
          setFirwork(true);
          // setChallsModal(!challsModal);
        } else {
          console.log('ㄲㅈ');
        }
      });
  }

  const onChangeFlag = (e: any) => {
    setAnswer(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    SubmitData();
  };
  // const onKeypress = (e: any) => {
  //   if (e.key === 'Escape') {
  //     setChallsModal(!challsModal);
  //   }
  // };
  useEffect(() => {
    // ref.current.focus();

    document.addEventListener('keyup', function (e) {
      if (e.key === 'Escape') {
        setChallsModal(!challsModal);
      }
    });
  }, [challsModal, setChallsModal]);

  return (
    <>
      <div className='Signup' onClick={handleModal} id='test'>
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
                {firework === true || userId.solved.includes(challId) ? null : (
                  <>
                    <div className='signup-input-text'>정답</div>
                    <div className='signup-input id'>
                      <input
                        type='text'
                        placeholder='Haxios{...}'
                        value={answer}
                        onChange={onChangeFlag}
                        ref={ref}
                      />
                    </div>
                    <div className='signup-button'>
                      <button>제출</button>
                    </div>
                  </>
                )}
                {
                  firework && <ChallengesEffect />

                  // (
                  //   <div
                  //     style={{
                  //       position: 'absolute',
                  //       top: '-100%',
                  //       right: '50%',
                  //       fontSize: '1.5rem',
                  //       width: '300px',
                  //       height: '50px',
                  //       borderRadius: '10px',
                  //       display: 'flex',
                  //       alignItems: 'center',
                  //       justifyContent: 'center',
                  //       transform: 'translate(50%, 50%)',
                  //       background: '#74c0fc',
                  //     }}
                  //   >
                  //     정답이오리다
                  //   </div>
                  // )
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ChallengeModal);
