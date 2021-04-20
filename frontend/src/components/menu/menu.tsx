import React, { useEffect, useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import title from '../../static/haxios.svg';
import '../../static/home.scss';

const Menu = () => {
  // let list = document.querySelector('#list');
  const [isActive, setIsActive] = useState<any>(false);
  const [isActive2, setIsActive2] = useState<any>(false);
  const history = useHistory<any>();
  const onClick = (e: any) => {
    // e.preventDefault();
    // e.stopPropagation();
    // console.log(list[0] === e.currentTarget);
    // for (let i = 0; i < list.length; i++) {
    //   console.log(list[i]);
    //   if (list[i] === e.currentTarget) {
    //     e.currentTarget.classList.add('active');
    //   } else {
    //     list[i].classList.remove('active');
    //   }
    // }
  };
  const onClick2 = (e: any) => {
    setIsActive(!isActive);
    setIsActive2(!isActive2);
    history.push('/challs');
  };

  return (
    <>
      <div className='home-container'>
        <div className='home-sidebar'>
          <div className='title-wrapper'>
            <img src={title} alt='' />
          </div>
          {/* <div className='home-sidemenu'> */}
          <div className='home-category'>
            <ul>
              <li
                // className={isActive ? 'active' : ''}
                className=''
                id='list'
                onClick={onClick}
              >
                Home
              </li>
              {/* <Link to='/'>
              </Link> */}

              <li
                // className={isActive2 ? 'active' : ''}
                className=''
                id='list'
                onClick={onClick2}
              >
                Challenges
              </li>
              {/* <Link to='/challs'>
              </Link> */}
              <li>Ranking</li>
            </ul>
          </div>

          <div className='copyright'>ⓒ 2021. j0n9hyun all rights reserved.</div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Menu);
