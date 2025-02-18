import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  textButton: {
    marginBottom: theme.spacing(2),
    textTransform: 'none',
  },
  divider: {
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.divider,
    margin: theme.spacing(1, 0, 2),
    lineHeight: '0.1em',
  },
  dividerText: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0, 1),
    lineHeight: 'inherit',
  },
}));
