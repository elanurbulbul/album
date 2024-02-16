import React from 'react'
import { Link } from 'react-router-dom';
import cx from 'classnames';



export default function SociamMediaItem({item, index}) {

  return (
    <li key={index}>
        <Link to={item.url} className={cx('socialMedia-item')}>
            {item.icon}
        </Link>
    </li>
  )
}
