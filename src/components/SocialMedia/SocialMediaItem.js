import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';



export default function SociamMediaItem({item, index}) {

  return (
    <li key={index}>
        <Link to={item.url} className={cx('socialMedia-item')}>
            <span dangerouslySetInnerHTML={{__html: item.icon}} />
            {item.name}
        </Link>
    </li>
  )
}
