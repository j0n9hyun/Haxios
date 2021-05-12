import React from 'react';
import { withRouter } from 'react-router';
import ManageDashboard from './manageDashboard';
import ManageMenu from './manageMenu';

const Management = () => {
  return (
    <>
      <ManageMenu />
      <ManageDashboard />
    </>
  );
};

export default withRouter(Management);
