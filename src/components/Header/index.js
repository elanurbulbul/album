import React from 'react'
import NavList from './Nav/List'
import {Link} from 'react-router-dom';
import cx from 'classnames';
import './index.scss';

export default function index() {
  return (
    <header className={cx('header')}>
        <Link to="/home">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/daily-icon-2/gallery-22.png" className={cx('logo')} alt="React Logo" />
        </Link>
        
        <NavList />
    </header>
  )
}
