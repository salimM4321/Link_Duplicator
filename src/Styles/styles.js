// src/styles/styles.js
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 600,
    margin: '0 auto',
    padding: theme.spacing(3),
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5em',
    marginBottom: theme.spacing(1),
    color: '#333',
  },
  subtitle: {
    fontSize: '1.5em',
    marginBottom: theme.spacing(2),
    color: '#555',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  addButton: {
    padding: theme.spacing(1.5, 4),
    borderRadius: 5,
  },
  linksContainer: {
    marginTop: theme.spacing(2),
  },
  linkItem: {
    marginTop: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1.2em',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#0056b3',
    },
  },
  copyButton: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: 5,
  },
}));

export default useStyles;
