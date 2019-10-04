import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 240,
    },
    width: 0,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: 240,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  toggleToolbar: {
    padding: 0,
    ...theme.mixins.toolbar,
  },
  toggleButton: {
    margin: theme.spacing(1),
    padding: theme.spacing(1, 2),
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));
