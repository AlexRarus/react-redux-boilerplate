import React, { useEffect } from 'react';
import Router from 'src/router';
import routes from 'src/router/routes';
import { Layout } from 'src/components/layout';
import { IMenuItem } from 'src/components/layout/interfaces';

import { connector, PropsFromRedux } from './connector';

const menuItems: IMenuItem[] = [
  {
    id: 'main',
    label: 'Главная',
    url: '/',
  },
  {
    id: 'theme',
    label: 'Тема',
    url: '/theme',
  },
];

function App(props: PropsFromRedux) {
  const { initAction } = props;

  useEffect(() => {
    initAction();
  }, []);

  return (
    <Layout menuItems={menuItems}>
      <Router routes={routes} />
    </Layout>
  );
}

export default connector(App);
