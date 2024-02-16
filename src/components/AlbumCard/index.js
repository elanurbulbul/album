import React from 'react'
import cx from 'classnames';

export default function AlbumCard() {
  return (
    <div className={cx('albumCard')}>
        <img src="https://via.placeholder.com/150" alt="album cover" className={cx('albumCard-cover')}/>
        <div className={cx('albumCard-info')}>
            <h3 className={cx('albumCard-title')}>Album Title</h3>
        </div>
    </div>
  )
}
