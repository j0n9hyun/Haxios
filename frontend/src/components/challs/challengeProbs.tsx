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
  challFileState,
  challLinkState,
} from '../atoms/authState';
import ChallengesModal from './challengesModal';

const ChallengeProbs = () => {
  const challsList = useRecoilValue(challsListState);
  const [challsModal, setChallsModal] = useRecoilState(challsModalState);
  const [challId, setChallId] = useRecoilState(challIdState);
  const [challTitle, setChallTitle] = useRecoilState(challTitleState);
  const [challPoint, setChallPoint] = useRecoilState(challPointState);
  const [challCategory, setChallCategory] = useRecoilState(challCategoryState);
  const [challDesc, setChallDesc] = useRecoilState(challDescState);
  const [challFile, setChallFile] = useRecoilState(challFileState);
  const [challLink, setChallLink] = useRecoilState(challLinkState);
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
              ({
                _id,
                title,
                point,
                category,
                description,
                file,
                link,
              }: any) => (
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
                    setChallFile(file);
                    setChallLink(link);
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
            challFile={challFile}
            challLink={challLink}
          />
        )}
      </div>
    </>
  );
};

export default withRouter(ChallengeProbs);
