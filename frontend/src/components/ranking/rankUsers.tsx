import React, { useEffect, useState } from 'react';
import { userListsState } from '../atoms/authState';
const RankUsers = () => {
  // const userLists = useRecoilValue(userListsSelector);
  const [유저목록, 유저목록_설정] = useState([]);
  useEffect(() => {
    const call = async () => {
      await userListsState().then((res: any) => 유저목록_설정(res));
    };
    call();
  }, []);

  return (
    <>
      {유저목록.map((v: any, i: number) => (
        <div className='rank-items' key={v._id}>
          <div className='rank-item'>{(i += 1)}</div>
          <div className='rank-item'>{v.name}</div>
          <div className='rank-item'>{v.totalPoint}</div>
          <div className='rank-item'>
            {v.last_updated.replace('T', ' ').replace('Z', '').slice(0, -4)}
          </div>
        </div>
      ))}
    </>
  );
};

export default RankUsers;
