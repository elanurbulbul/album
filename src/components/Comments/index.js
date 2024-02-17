import React from 'react'
import cx from 'classnames';
import './index.scss';

export default function CommentCard({commentItem}) {
  return (
    <div className={cx('commentCard')}>
        <div className={cx('commentCard-name')}>{commentItem.name}</div>  
    </div>
  )
}
