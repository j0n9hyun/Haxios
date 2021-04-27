import React from 'react';
import { useRecoilValue } from 'recoil';
import { authenticationSeletor } from '../atoms/authState';

const Profile = () => {
  const { name, solved } = useRecoilValue(authenticationSeletor);
  return (
    <div style={{ color: '#fff' }}>
      {name} {solved}
    </div>
  );
};

export default Profile;
