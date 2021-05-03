import React from 'react';
import Navbar from '../Nav';
import Menu from '../menu';
import '../../static/rank.scss';
import goldcup from '../../static/goldcup.svg';
const Rank = () => {
  return (
    <>
      <Menu />
      <Navbar />
      <div className='rank-wrapper'>
        <div className='rank-table'>
          <div className='rank-head'>
            <div className='rank-title-text'>순위</div>
            <div className='rank-title-text'> 닉네임</div>
            <div className='rank-title-text'>점수</div>
          </div>
          <div className='rank-items'>
            <div className='rank-item'>
              <img src={goldcup} alt='' width='100%' />1
            </div>
            <div className='rank-item'>종현</div>
            <div className='rank-item'>500</div>
          </div>
          <div className='rank-items'>
            <div className='rank-item'>1</div>
            <div className='rank-item'>종현</div>
            <div className='rank-item'>500</div>
          </div>
          <div className='rank-items'>
            <div className='rank-item'>1</div>
            <div className='rank-item'>종현</div>
            <div className='rank-item'>500</div>
          </div>
          <div className='rank-items'>
            <div className='rank-item'>1</div>
            <div className='rank-item'>종현</div>
            <div className='rank-item'>500</div>
          </div>
          <div className='rank-items'>
            <div className='rank-item'>1</div>
            <div className='rank-item'>종현</div>
            <div className='rank-item'>500</div>
          </div>
          <div className='rank-items'>
            <div className='rank-item'>1</div>
            <div className='rank-item'>종현</div>
            <div className='rank-item'>500</div>
          </div>
          <div className='rank-items'>
            <div className='rank-item'>1</div>
            <div className='rank-item'>종현</div>
            <div className='rank-item'>500</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rank;
