import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
const Home = (props: any) => {
  const location = useLocation();
  console.log(location);
  return <div>asd</div>;
};

export default Home;
