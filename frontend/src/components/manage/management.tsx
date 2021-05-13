import React from 'react';
import { withRouter } from 'react-router';
import ManageDashboard from './manageDashboard';
import ManageMenu from './manageMenu';
import { Helmet } from 'react-helmet-async';
const Management = () => {
  return (
    <>
      <Helmet>
        <title>Haxios - Admin</title>
      </Helmet>
      <ManageMenu />
      <ManageDashboard />
    </>
  );
};

export default withRouter(Management);
