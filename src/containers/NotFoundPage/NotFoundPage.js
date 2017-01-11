import React from 'react';
import { Link } from 'react-router';
import { Page } from '../../components';

export default () => (
  <Page title="Page not found">
    <Link to="/">index page</Link>
  </Page>
);