/* eslint import/dynamic-import-chunkname: 0 */
/* eslint react/display-name: 0 */
//
import { lazy } from 'react';

import { IRoute } from './interfaces';

const routes: IRoute[] = [
  {
    exact: true,
    path: `/`,
    component: lazy(() => import(/* webpackChunkName: "page_main" */ 'src/containers/main')),
  },
  {
    exact: true,
    path: `/theme`,
    component: lazy(() => import(/* webpackChunkName: "page_lesson" */ 'src/containers/theme')),
  },
  {
    path: `*`,
    component: lazy(() => import(/* webpackChunkName: "page_404" */ 'src/containers/404')),
  },
];

export default routes;
