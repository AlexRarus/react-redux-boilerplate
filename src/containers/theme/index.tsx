import React from 'react';

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
    <div>
      <Row>
        <label htmlFor="color">Color</label>
        <input name="color" type="text" onChange={changeColorHandler} value={theme.color} />
      </Row>
      <Row>
        <label htmlFor="background">Background</label>
        <input
          name="background"
          type="text"
          onChange={changeBackgroundHandler}
          value={theme.background}
        />
      </Row>
    </div>
  );
}

export default connector(ThemePage);
