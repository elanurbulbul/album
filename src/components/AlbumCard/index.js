import React from 'react'
import cx from 'classnames';
import './index.scss';

export default function AlbumCard({albumItem}) {
  return (
    <div className={cx('albumCard')}>
      
        <div className={cx('albumCard-info')}>
            <h3 className={cx('albumCard-title')}>{albumItem.title}</h3>
        </div>
    </div>
  )
}
