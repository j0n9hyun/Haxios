import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { authenticationSeletor, userListsState } from '../atoms/authState';
import RankTrophy from './rankTrophy';

const RankUsers = () => {
  const userId = useRecoilValue(authenticationSeletor);
  const [유저목록, 유저목록_설정] = useState<any>([]);
  useEffect(() => {
    const call = async () => {
      await userListsState()
        ?.then((res: any) =>
          유저목록_설정(res?.filter((v: any) => v.totalPoint !== 0))
        )
        .catch((e: any) => e);
    };
    call();
  }, []);

  return (
    <>
      <RankTrophy 유저목록={유저목록} />
      {유저목록.map((v: any, i: number) => (
        <div
          className={userId._id === v._id ? 'rank-items self' : 'rank-items'}
          key={v._id}
        >
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
