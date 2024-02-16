import React from 'react'
import NavList from './Nav/List'
import {Link} from 'react-router-dom';
import './index.scss';
import SocialMedyaList from '../SocialMedia/SocialMediaList';
import Index from './Nav/DipNot';
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
