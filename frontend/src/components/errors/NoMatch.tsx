import React from 'react';
import '../../static/error.scss';
import title from '../../static/haxios.svg';
const NoMatch = () => {
  return (
    <div className='notFound-Wrapper'>
      {/* <div className='image blinking'> */}
      <figure>
        <img src={title} alt='' />
      </figure>
      <div className='notFound-contents'>잘못된 페이지</div>
    </div>
    // </div>
  );
};

export default NoMatch;
