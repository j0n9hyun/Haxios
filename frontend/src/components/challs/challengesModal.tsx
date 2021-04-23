import React, { useState } from 'react';
import '../../static/home.scss';
import { withRouter } from 'react-router-dom';
import title from '../../static/title.svg';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { challsModalState, solvedState } from '../atoms/authState';

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
  const [test, setTest] = useRecoilState(challsModalState);

  const onChangeFlag = (e: any) => {
    setAnswer(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
    if (challFlag === answer) {
      setSolved(true);
      setTest(!test);
    } else {
      console.log('틀림');
    }
  };
  const onKeypress = (e: any) => {
    if (e.key === 'Escape') {
      setTest(!test);
    }
  };

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
                  setTest(!test);
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
              <div className='signup-input-text'>정답</div>
              <div className='signup-input id'>
                <input
                  type='text'
                  placeholder='flag'
                  onChange={onChangeFlag}
                  onKeyDown={onKeypress}
                />
              </div>
              <div className='signup-button'>
                <button>제출</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ChallengeModal);
