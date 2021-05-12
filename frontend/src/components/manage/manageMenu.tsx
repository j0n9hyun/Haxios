import React from 'react';
import '../../static/admin.scss';
import '../../static/font/css/all.css';

const ManageMenu = () => {
  return (
    <div className='sidebar-wrapper'>
      <div className='sidebar-title'>Admin</div>
      <div className='title-line' />
      <div className='sidebar-items'>
        <li>
          <i className='fas fa-th-large' />
          <span className='sidebar-item'>대시보드</span>
        </li>
        <li>
          <i className='fas fa-users' />
          <span className='sidebar-item'>유저관리</span>
        </li>
        <li>
          <i className='fas fa-list-alt' />
          <span className='sidebar-item'>문제관리</span>
        </li>
        <li>
          <i className='fas fa-plus-circle' />
          <span className='sidebar-item'>문제추가</span>
        </li>
        <li>
          <i className='fas fa-chart-bar' />
          <span className='sidebar-item'>로그</span>
        </li>
        <li>
          <i className='fas fa-cog' />
          <span className='sidebar-item'>설정</span>
        </li>
      </div>
    </div>
  );
};

export default ManageMenu;
