import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../../static/home.scss';
import Navbar from '../Nav';
import Menu from '../menu';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  challengesSelector,
  challsModalState,
  challIdState,
  challsListState,
  challTitleState,
  challPointState,
  challCategoryState,
  challDescState,
  challFlagState,
  solvedState,
  authenticationSeletor,
} from '../atoms/authState';
import ChallengesModal from './challengesModal';

const Challenges = (props: any) => {
  const [challsList, setChallsList] = useRecoilState(challsListState);
  const checkedChalls = useRecoilValue(challengesSelector);
  const [challsModal, setChallsModal] = useRecoilState(challsModalState);
  const [challId, setChallId] = useRecoilState(challIdState);
  const [challTitle, setChallTitle] = useRecoilState(challTitleState);
  const [challPoint, setChallPoint] = useRecoilState(challPointState);
  const [challCategory, setChallCategory] = useRecoilState(challCategoryState);
  const [challDesc, setChallDesc] = useRecoilState(challDescState);
  const [challFlag, setChallFlag] = useRecoilState(challFlagState);

  const onClickTitle = (e: any) => {
    setChallsModal(!challsModal);
  };

  const solved = useRecoilValue(solvedState);
  const userId = useRecoilValue(authenticationSeletor);
  const [solveId, setSolveId] = useState('');

  useEffect(() => {
    setChallsList(checkedChalls);
  }, []);

  let aa = challsList.map((v: any) => v._id);
  const r = aa.filter((x: string) => userId.solved.includes(x));

  // console.log(aa[0]);
  // console.log(userId.solved.includes(aa[0]));

  return (
    <>
      <Menu />
      <Navbar />
      <div className='challs-wrapper'>
        {challsList.map instanceof Function
          ? challsList.map((v: any) => (
              <div
                className={
                  userId.solved.includes(v._id)
                    ? 'challs-box correct'
                    : 'challs-box'
                }
                onClick={() => {
                  setChallId(v._id);
                  setChallTitle(v.title);
                  setChallPoint(v.point);
                  setChallCategory(v.category);
                  setChallDesc(v.description);
                  setChallFlag(v.flag);
                  setChallsModal(!challsModal);
                }}
                key={v._id}
              >
                <div className='challs-title'>{v.title}</div>
                <div className='challs-point'>{v.point}</div>
                <div className='challs-tag'>{v.category}</div>
                {/* <div>
                  {v._id} {userId.solved}
                </div> */}
              </div>
            ))
          : null}
        {challsModal && (
          <ChallengesModal
            handleModal={onClickTitle}
            challId={challId}
            challTitle={challTitle}
            challPoint={challPoint}
            challCategory={challCategory}
            challDesc={challDesc}
            challFlag={challFlag}
          />
        )}
      </div>
    </>
  );
};

export default withRouter(Challenges);
