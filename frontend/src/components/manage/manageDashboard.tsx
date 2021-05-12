import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loggedState, userLoggedState } from '../atoms/authState';

const ManageDashboard = () => {
  const [log, setLog] = useRecoilState(loggedState);
  useEffect(() => {
    userLoggedState().then((res: any) => setLog(res));
  }, [setLog]);
  return (
    <div>
      <div className='dashboard-wrapper'>
        {log.map((v: any) => (
          <div className='logged-users'>
            {v.name}님 마지막 로그인 시간
            {v.last_logged.replace('T', ' ').replace('Z', '').slice(2, -4)}{' '}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageDashboard;
