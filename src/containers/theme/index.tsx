import React from 'react';
import { PageThemedWrapper } from 'src/style';

import { connector, PropsFromRedux } from './connector';
import { Row } from './style';

function ThemePage(props: PropsFromRedux) {
  const { changeThemeAction, theme } = props;

  const changeColorHandler = (e: any) => {
    const value = e.target.value;
    changeThemeAction({
      color: value,
      background: theme.background,
    });
  };

  const changeBackgroundHandler = (e: any) => {
    const value = e.target.value;
    changeThemeAction({
      color: theme.color,
      background: value,
    });
  };

  return (
    <PageThemedWrapper theme={theme}>
      <Row>
        <label htmlFor="color">Color</label>
        <input name="color" type="text" onChange={changeColorHandler} />
      </Row>
      <Row>
        <label htmlFor="background">Background</label>
        <input name="background" type="text" onChange={changeBackgroundHandler} />
      </Row>
    </PageThemedWrapper>
  );
}

export default connector(ThemePage);
