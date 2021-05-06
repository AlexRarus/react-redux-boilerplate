import React from 'react';

import { IMenuItem } from '../interfaces';

import { TopMenuItem } from './top-menu-item';
import { TopMenuWrapper } from './style';

interface IProps {
  topMenuItems: IMenuItem[];
}

export function TopMenu(props: IProps) {
  const { topMenuItems } = props;

  return (
    <TopMenuWrapper>
      {topMenuItems.map((topMenuItem: IMenuItem) => (
        <TopMenuItem key={topMenuItem.id} item={topMenuItem} />
      ))}
    </TopMenuWrapper>
  );
}
