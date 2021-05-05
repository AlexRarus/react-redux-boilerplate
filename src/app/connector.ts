import { connect, ConnectedProps } from 'react-redux';

import { mapStateToProps } from './selectors';
import * as Actions from './actions';

export const connector = connect(mapStateToProps, Actions);
export type PropsFromRedux = ConnectedProps<typeof connector>;
