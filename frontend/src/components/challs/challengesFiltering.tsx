import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import '../../static/filtering.scss';
import { challengesSelector, challsListState } from '../atoms/authState';
const ChallengesFiltering = () => {
  const setChallsList = useSetRecoilState(challsListState);
  const checkedChalls = useRecoilValue(challengesSelector);
  // const setChallsList = useSetRecoilState(challsListState);
  const onClick = (e: any) => {
    if (e.target.innerHTML === 'Pwn') {
      setChallsList(checkedChalls.filter((v: any) => v.category === 'Pwn'));
    }
    if (e.target.innerHTML === 'Rev') {
      setChallsList(checkedChalls.filter((v: any) => v.category === 'Rev'));
    }
    if (e.target.innerHTML === 'Web') {
      setChallsList(checkedChalls.filter((v: any) => v.category === 'Web'));
    }
    if (e.target.innerHTML === 'Forensics') {
      setChallsList(
        checkedChalls.filter((v: any) => v.category === 'Forensics')
      );
    }
    if (e.target.innerHTML === 'Crypto') {
      setChallsList(checkedChalls.filter((v: any) => v.category === 'Crypto'));
    }
    if (e.target.innerHTML === 'Total') {
      setChallsList(checkedChalls);
    }
  };
  useEffect(() => {
    setChallsList(checkedChalls);
  }, [checkedChalls, setChallsList]);

  return (
    <div className='filtering-wrapper'>
      <div className='filtering-items'>
        <div className='filtering-item active' onClick={onClick}>
          Total
        </div>
        <div className='filtering-item' onClick={onClick}>
          Pwn
        </div>
        <div className='filtering-item' onClick={onClick}>
          Rev
        </div>
        <div className='filtering-item' onClick={onClick}>
          Web
        </div>
        <div className='filtering-item' onClick={onClick}>
          Forensics
        </div>
        <div className='filtering-item' onClick={onClick}>
          Crypto
        </div>
      </div>
    </div>
  );
};

export default ChallengesFiltering;
