import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/food-banner.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Zwiggy - Order your food!</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>        
        <img src = {mealsImage}/>
      </div>
    </Fragment>
  );
};

export default Header;