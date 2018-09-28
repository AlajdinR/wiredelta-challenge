import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { SocialIcon } from 'react-social-icons';
// import CheckoutSummary from '../../../components/Order/CheckoutSummary/CheckoutSummary';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
    <nav className={classes.Icons}>
      <SocialIcon
        style={{ height: 30, width: 30, top: 20, margin: 5 }}
        url="https://www.facebook.com/manueldubfestivalsicily/"
      />
      <SocialIcon
        style={{ height: 30, width: 30, top: 20, margin: 5 }}
        url="https://www.youtube.com/channel/UCB7nmk2-VGkgJzN7SsikJaw"
      />
    </nav>
  </header>
);

export default toolbar;
