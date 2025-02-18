import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './appbar-drawer-button.styles';

const AppBarDrawerButton = ({ toggleMobileDrawer }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Hidden mdUp>
        <IconButton
          color="inherit"
          aria-label={t('appbar.openSidebar')}
          edge="start"
          onClick={() => toggleMobileDrawer()}
          className={classes.button}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </>
  );
};

AppBarDrawerButton.propTypes = {
  toggleMobileDrawer: PropTypes.func.isRequired,
};

export default AppBarDrawerButton;
