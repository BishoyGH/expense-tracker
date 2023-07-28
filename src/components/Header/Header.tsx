// @ts-ignore
import logo from '../../assets/investment-calculator-logo.png';
// @ts-ignore
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt='logo' />
      <h1>Expense Tracker</h1>
    </header>
  );
};

export default Header;
