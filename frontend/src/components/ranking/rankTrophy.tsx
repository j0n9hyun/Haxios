import React from 'react';
import goldcup from '../../static/goldcup.svg';
import silvercup from '../../static/silvercup.svg';
import bronzecup from '../../static/bronzecup.svg';

const RankTrophy = ({ 유저목록 }: any) => {
  return (
    <>
      <div className='rank-head'>
        <div className='rank-title-text'>순위</div>
        <div className='rank-title-text'> 닉네임</div>
        <div className='rank-title-text'>점수</div>
        <div className='rank-title-text'>마지막 업데이트</div>
      </div>
      {유저목록.length >= 3 ? (
        <>
          <div className='rank-trophy'>
            <figure>
              <img src={goldcup} alt='' />
            </figure>
          </div>
          <div className='rank-trophy silver-cup'>
            <figure>
              <img src={silvercup} alt='' />
            </figure>
          </div>
          <div className='rank-trophy bronze-cup'>
            <figure>
              <img src={bronzecup} alt='' />
            </figure>
          </div>
        </>
      ) : null}
    </>
  );
};

export default RankTrophy;
