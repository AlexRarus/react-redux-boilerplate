import React from 'react';

import { TopPanelWrapper, TopPanelLink } from './style';

export default function TopPanel(props: any) {
  return (
    <TopPanelWrapper>
      <TopPanelLink to="/" exact={true} activeStyle={{ color: 'black' }}>
        Главная страница
      </TopPanelLink>
      <TopPanelLink to="/theme" exact={true} activeStyle={{ color: 'black' }}>
        Тема
      </TopPanelLink>
    </TopPanelWrapper>
  );
}
