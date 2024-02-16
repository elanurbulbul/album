import React from 'react'
import cx from 'classnames';
import './index.scss';

export default function CommentCard({commentItem}) {
  return (
    <div className={cx('commentCard')}>
        <div className={cx('commentCard-name')}>{commentItem.name}</div>
        <div className={cx('commentCard-email')}>{commentItem.email}</div>
        <div className={cx('commendCard-info')}>
            <h3 className={cx('commentCard-body')}>{commentItem.body}</h3>
        </div>
    </div>
  )
}
