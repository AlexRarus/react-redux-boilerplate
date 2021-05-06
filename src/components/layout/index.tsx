import React, { ReactNode } from 'react';

import { IMenuItem } from './interfaces';
import { TopMenu } from './top-menu';
import { LayoutWrapper, TopPanel, PageWrapper } from './style';

interface IProps {
  children: ReactNode;
  menuItems: IMenuItem[];
}

export function Layout(props: IProps) {
  const { menuItems, children } = props;
  return (
    <LayoutWrapper>
      <TopPanel>
        <TopMenu topMenuItems={menuItems} />
      </TopPanel>
      <PageWrapper>{children}</PageWrapper>
    </LayoutWrapper>
  );
}
