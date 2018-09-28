import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/home">Home</NavigationItem>
    <NavigationItem link="/md6">MD#6</NavigationItem>
    <NavigationItem link="/about">About Manuel</NavigationItem>
    <NavigationItem link="/shop">Shop</NavigationItem>
    <NavigationItem link="/contact">Contact</NavigationItem>
    <NavigationItem link="/" exact>
      Volunteer
    </NavigationItem>
  </ul>
);

export default navigationItems;
