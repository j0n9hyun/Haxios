import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../static/home.scss';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
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
import ChallengesFiltering from './challengesFiltering';

const ChallengeProbs = () => {
  const challsList = useRecoilValue(challsListState);
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

  return (
    <>
      <div className='challs-wrapper'>
        {challsList.map instanceof Function
          ? challsList.map(
              ({ _id, title, point, category, description }: any) => (
                <div
                  className={
                    userId.solved.includes(_id) || solved.includes(_id)
                      ? 'challs-box correct'
                      : 'challs-box'
                  }
                  onClick={() => {
                    setChallId(_id);
                    setChallTitle(title);
                    setChallPoint(point);
                    setChallCategory(category);
                    setChallDesc(description);
                    setChallsModal(!challsModal);
                  }}
                  key={_id}
                >
                  <div className='challs-title'>{title}</div>
                  <div className='challs-point'>{point}</div>
                  <div className='challs-tag'>{category}</div>
                </div>
              )
            )
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
    </>
  );
};

export default withRouter(ChallengeProbs);
