import { connect } from 'react-redux';

import { signOut } from '../../../store/auth';
import {
  getIsDrawerOpened,
  toggleMobileDrawer,
} from '../../../store/app';
import AppBar from './appbar.component';

const mapStateToProps = state => ({
  isDrawerOpened: getIsDrawerOpened(state),
});

const mapDispatchToProps = {
  signOut,
  toggleMobileDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
