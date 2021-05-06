import React, { useCallback } from 'react';

import { IMenuItem } from '../interfaces';

import { TopMenuItemWrapper, TopMenuLink, TopMenuButton } from './style';

interface IProps {
  item: IMenuItem;
}

export function TopMenuItem(props: IProps) {
  const { item } = props;

  const clickHandler = useCallback(() => {
    item.onClick && item.onClick(item.id);
  }, []);

  return (
    <TopMenuItemWrapper>
      {item.url && <TopMenuLink to={item.url}>{item.label}</TopMenuLink>}
      {!item.url && <TopMenuButton onClick={clickHandler}>{item.label}</TopMenuButton>}
    </TopMenuItemWrapper>
  );
}
