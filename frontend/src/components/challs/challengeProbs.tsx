import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import '../../static/home.scss';
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
  authenticationSeletor,
  solvedState,
} from '../atoms/authState';
import ChallengesModal from './challengesModal';

const ChallengeProbs = () => {
  const [challsList, setChallsList] = useRecoilState(challsListState);
  const checkedChalls = useRecoilValue(challengesSelector);
  const [challsModal, setChallsModal] = useRecoilState(challsModalState);
  const [challId, setChallId] = useRecoilState(challIdState);
  const [challTitle, setChallTitle] = useRecoilState(challTitleState);
  const [challPoint, setChallPoint] = useRecoilState(challPointState);
  const [challCategory, setChallCategory] = useRecoilState(challCategoryState);
  const [challDesc, setChallDesc] = useRecoilState(challDescState);
  const solved = useRecoilValue(solvedState);

  const onClickTitle = (e: any) => {
    setChallsModal(!challsModal);
  };

  const userId = useRecoilValue(authenticationSeletor);

  useEffect(() => {
    setChallsList(checkedChalls);
  }, [checkedChalls, setChallsList]);
  return (
    <div className='challs-wrapper'>
      {challsList.map instanceof Function
        ? challsList.map((v: any) => (
            <div
              className={
                userId.solved.includes(v._id) || solved.includes(v._id)
                  ? 'challs-box correct'
                  : 'challs-box'
              }
              onClick={() => {
                setChallId(v._id);
                setChallTitle(v.title);
                setChallPoint(v.point);
                setChallCategory(v.category);
                setChallDesc(v.description);
                setChallsModal(!challsModal);
              }}
              key={v._id}
            >
              <div className='challs-title'>{v.title}</div>
              <div className='challs-point'>{v.point}</div>
              <div className='challs-tag'>{v.category}</div>
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
        />
      )}
    </div>
  );
};

export default withRouter(ChallengeProbs);
