import { makeStyles } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  snackbar: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: 500,
    },
  },
  snackbarContent: {
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
    },
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: theme.spacing(0.5),
  },
}));
