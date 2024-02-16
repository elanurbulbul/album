import React from 'react'
import NavList from './Nav/List'
import './index.scss';
import SocialMedyaList from '../SocialMedia/SocialMediaList';
import cx from 'classnames';

export default function index() {
  return (
    <footer className={cx('footer')}>
      <NavList/> 
      <SocialMedyaList/>
      <p className={cx('footerNote')}> @2024 Your Company, Inc. All rights reserved</p>
    </footer>
  )
}
