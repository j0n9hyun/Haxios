import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import title from '../../static/haxios.svg';
import '../../static/home.scss';
import '../../static/challs.scss';
import Navbar from '../Nav';
import Menu from '../menu';
const Challenges = (props: any) => {
  return (
    <>
      <Menu />
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            border: '1px solid skyblue',
            fontSize: '2rem',
            width: '300px',
            height: '300px',
            top: '0',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          하이
        </div>
      </div>
    </>
  );
};

export default withRouter(Challenges);
