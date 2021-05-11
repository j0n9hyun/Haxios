import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  challFile,
  challLink,
}: any) => {
  const [answer, setAnswer] = useState('');
  const [solved, setSolved] = useRecoilState(solvedState);
  const [challsModal, setChallsModal] = useRecoilState(challsModalState);
  const userId = useRecoilValue(authenticationSeletor);
  const [firework, setFirwork] = useState(false);
  const ref = useRef<any>();

  const [중복제출, 중복제출_설정] = useState<any>(false);

  let isSubmitted = false;

  function oneTimeSubmit() {
    if (isSubmitted === false) {
      isSubmitted = true;
      중복제출_설정(false);
      SubmitData();
    } else {
      중복제출_설정(true);
      setTimeout(() => {
        중복제출_설정(false);
      }, 2000);
    }
  }

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
        } else {
          console.log('땡');
        }
      });
  }
  const onChangeFlag = (e: any) => {
    setAnswer(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    oneTimeSubmit();
  };

  const onClickFile = (e: any) => {
    window.open(challFile);
  };
  const onClickLink = (e: any) => {
    window.open(challLink);
  };

  const onClickCloseButton: any = useCallback(() => {
    const closeMotion: any = document.getElementById('close');
    closeMotion?.classList?.add('fadeout');
    setTimeout(() => {
      setChallsModal(!challsModal);
      closeMotion?.classList?.remove('fadeout');
    }, 300);
  }, [challsModal, setChallsModal]);

  useEffect(() => {
    document.addEventListener('keyup', function (e) {
      if (e.key === 'Escape') {
        onClickCloseButton();
      }
    });
  }, [onClickCloseButton]);

  return (
    <>
      <div className='Signup' onClick={handleModal}>
        <div
          id='close'
          className='signup-page-container'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='signup-wrapper modal'>
            <figure style={{ marginTop: '20px' }}>
              <img src={title} alt='' />
            </figure>
            <div className='chall-close-btn'>
              <i className='fas fa-times' onClick={onClickCloseButton} />
            </div>
            <div className='signup-header'>
              {challTitle}
              <div className='signup-header-subtitle'>
                {challPoint} {challCategory}
              </div>
            </div>
            <div className='box-wrapper'>
              {challFile === null ||
              challFile === undefined ||
              challFile === '' ? null : (
                <div className='file-box' onClick={onClickFile}>
                  파일
                </div>
              )}
              {challLink === null ||
              challLink === undefined ||
              challLink === '' ? null : (
                <div className='link-box' onClick={onClickLink}>
                  웹 주소
                </div>
              )}
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
                {firework === true ||
                userId.solved.includes(challId) ||
                solved.includes(challId) ? (
                  <>
                    <div className='signup-input-text'>정답</div>
                    <div className='signup-input id'>
                      <input
                        type='text'
                        placeholder='이미 완료한 문제입니다.'
                        disabled
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className='signup-input-text'>정답</div>
                    {중복제출 === true ? (
                      <>
                        <div className='signup-input id'>
                          <input
                            type='text'
                            placeholder='Haxios{...}'
                            disabled
                          />
                        </div>
                        <div className='signup-button repeat'>
                          <button disabled>서버를 괴롭히지 마세요.</button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='signup-input id'>
                          <input
                            type='text'
                            placeholder='Haxios{...}'
                            onChange={onChangeFlag}
                            ref={ref}
                          />
                        </div>
                        <div className='signup-button'>
                          <button>제출</button>
                        </div>
                      </>
                    )}
                  </>
                )}
                {firework && <ChallengesEffect />}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ChallengeModal);
