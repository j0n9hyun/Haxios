import React, { useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import '../../static/filtering.scss';
import { challengesSelector, challsListState } from '../atoms/authState';

const ChallengesFiltering = () => {
  const [challsList, setChallsList] = useRecoilState(challsListState);
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
      <div>
        <button onClick={onClick}>Total</button>
      </div>
      <div>
        <button onClick={onClick}>Pwn</button>
      </div>
      <div>
        <button onClick={onClick}>Rev</button>
      </div>
      <div>
        <button onClick={onClick}>Web</button>
      </div>
      <div>
        <button onClick={onClick}>Forensics</button>
      </div>
      <div>
        <button onClick={onClick}>Crypto</button>
      </div>
    </div>
  );
};

export default ChallengesFiltering;
