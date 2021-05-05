import React, { useEffect } from 'react';
import Router from 'src/router';
import routes from 'src/router/routes';

import { connector, PropsFromRedux } from './connector';
import { BaseLayout } from './style';
import TopPanel from './top-panel';

function App(props: PropsFromRedux) {
  const { initAction } = props;

  useEffect(() => {
    initAction();
  }, []);

  return (
    <BaseLayout>
      <TopPanel />
      <Router routes={routes} />
    </BaseLayout>
  );
}

export default connector(App);
