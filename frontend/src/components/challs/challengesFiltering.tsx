import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import '../../static/filtering.scss';
import { challengesSelector, challsListState } from '../atoms/authState';
const ChallengesFiltering = () => {
  const setChallsList = useSetRecoilState(challsListState);
  const checkedChalls = useRecoilValue(challengesSelector);
  const [active, setActive] = useState(0);
  // const setChallsList = useSetRecoilState(challsListState);
  const onClick = (e: any) => {
    if (e.target.innerHTML === 'Pwn') {
      setChallsList(checkedChalls.filter((v: any) => v.category === 'Pwn'));
      setActive(1);
    }
    if (e.target.innerHTML === 'Rev') {
      setChallsList(checkedChalls.filter((v: any) => v.category === 'Rev'));
      setActive(2);
    }
    if (e.target.innerHTML === 'Web') {
      setChallsList(checkedChalls.filter((v: any) => v.category === 'Web'));
      setActive(3);
    }
    if (e.target.innerHTML === 'Forensics') {
      setChallsList(
        checkedChalls.filter((v: any) => v.category === 'Forensics')
      );
      setActive(4);
    }
    if (e.target.innerHTML === 'Crypto') {
      setChallsList(checkedChalls.filter((v: any) => v.category === 'Crypto'));
      setActive(5);
    }
    if (e.target.innerHTML === 'Total') {
      setChallsList(checkedChalls);
      setActive(0);
    }
  };
  useEffect(() => {
    setChallsList(checkedChalls);
  }, [checkedChalls, setChallsList]);

  return (
    <div className='filtering-wrapper'>
      <div className='filtering-items'>
        <div
          className={active === 0 ? 'filtering-item active' : 'filtering-item'}
          onClick={onClick}
        >
          Total
        </div>
        <div
          className={active === 1 ? 'filtering-item active' : 'filtering-item'}
          onClick={onClick}
        >
          Pwn
        </div>
        <div
          className={active === 2 ? 'filtering-item active' : 'filtering-item'}
          onClick={onClick}
        >
          Rev
        </div>
        <div
          className={active === 3 ? 'filtering-item active' : 'filtering-item'}
          onClick={onClick}
        >
          Web
        </div>
        <div
          className={active === 4 ? 'filtering-item active' : 'filtering-item'}
          onClick={onClick}
        >
          Forensics
        </div>
        <div
          className={active === 5 ? 'filtering-item active' : 'filtering-item'}
          onClick={onClick}
        >
          Crypto
        </div>
      </div>
    </div>
  );
};

export default ChallengesFiltering;
