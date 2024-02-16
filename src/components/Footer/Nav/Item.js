import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';



export default function Item({item, index}) {
  const location = useLocation();
  const isActive = location.pathname === item.url;

  return (
    <li key={index}>
        <Link to={item.url} className={cx('nav-item', {active: isActive})}>
            {item.name}
        </Link>
    </li>

  )
}
