import React, { useState } from 'react';
import '../../static/home.scss';
import { withRouter } from 'react-router-dom';
import title from '../../static/title.svg';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  authenticationSeletor,
  challsModalState,
  solvedState,
} from '../atoms/authState';
import axios from 'axios';

const ChallengeModal = ({
  handleModal,
  challId,
  challTitle,
  challPoint,
  challCategory,
  challDesc,
  challFlag,
}: any) => {
  const [answer, setAnswer] = useState('');
  const setSolved = useSetRecoilState(solvedState);
  const [challsModal, setChallsModal] = useRecoilState(challsModalState);
  const userId = useRecoilValue(authenticationSeletor);

  async function patchProb() {
    const response: any = await axios.patch(`api/users/challs/${challId}`);
    return response;
  }

  async function test() {
    console.log(challId);
    const response: any = await axios.post(`api/users/submit/${userId._id}`, {
      solved: challId,
    });
    return response;
  }

  const onChangeFlag = (e: any) => {
    setAnswer(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (challFlag === answer) {
      setSolved(1);
      // patchProb();
      test();
      setChallsModal(!challsModal);
      window.location.reload();
    } else {
      setSolved(0);
      console.log('틀림');
    }
  };
  const onKeypress = (e: any) => {
    if (e.key === 'Escape') {
      setChallsModal(!challsModal);
    }
  };

  const [disabled, setDisabled] = useState(false);

  const asdasd = (document.getElementById('hou').disabled = true);
  // if (userId.solved.includes(challId)) {
  //   setDisabled(true);
  // } else {
  //   setDisabled(false);
  // }
  const element = document.getElementById('hou');
  // element = true;

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
                  // border: '1px solid red',
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
                    disabled={asdasd}
                    id='hou'
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
