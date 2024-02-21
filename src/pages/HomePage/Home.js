import React from 'react'
import cx from 'classnames';
import foto from './music.jpg';

export default function Home() {
  return (
    <div className={cx('homePage')}>
      <div className={cx('home-info')}>
        <h2>MUSIC IS THE BEST COMMUNICATION...</h2>  
        <img className={cx('home-img')} src={foto}/>
      </div>  
    </div>
  )
}
