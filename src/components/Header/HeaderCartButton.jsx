
import classes from './HeaderCartButton.module.css';
import { Link } from 'react-router-dom';

const HeaderCartButton = () => {
  return (
    <Link to="/cart"> <button className={classes.button}>Cart<span className={classes.badge}>0</span> </button>
    </Link>
  );
};

export default HeaderCartButton;