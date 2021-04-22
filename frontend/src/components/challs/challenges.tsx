import React, { useEffect, useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import title from '../../static/haxios.svg';
import '../../static/home.scss';
import Navbar from '../Nav';
import Menu from '../menu';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  authenticationSeletor,
  challengesSelector,
  challengesState,
} from '../atoms/authState';

const Challenges = (props: any) => {
  const [challsList, setChallsList] = useState([]);
  const checkedChalls = useRecoilValue(challengesSelector);
  const history = useHistory();
  const { isAuth, isAdmin } = useRecoilValue(authenticationSeletor);
  useEffect(() => {
    if (!isAuth) {
      history.push('/');
    } else {
      setChallsList(checkedChalls);
    }
  }, []);

  return (
    <>
      <Menu />
      <Navbar />
      <div className='challs-wrapper'>
        {challsList.map instanceof Function
          ? challsList.map((v: any) => (
              <div
                className={
                  checkedChalls === true ? 'challs-box-correct' : 'challs-box'
                }
              >
                <div className='challs-title'>
                  {v.title} {v.point}
                </div>
                <div className='challs-tag'>{v.category}</div>
              </div>
            ))
          : null}
        {/* <div className='challs-box'>
          <div className='challs-title'>
            어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고
          </div>
          <div className='challs-tag'>Rev</div>
        </div>
        <div className='challs-box'>
          <div className='challs-title'>문제1</div>
        </div>
        <div className='challs-box-correct'>
          <div className='challs-title'>문제1</div>
        </div>
        <div className='challs-box'>
          <div className='challs-title'>문제1</div>
        </div>
        <div className='challs-box'>
          <div className='challs-title'>문제1</div>
        </div> */}
      </div>
    </>
  );
};

export default withRouter(Challenges);
