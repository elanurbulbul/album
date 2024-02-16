import React from 'react'

export const CommentDetail = () => {
  return (
    <div className={cx('commentCar')}>
       <div className={cx('commentCard-email')}>{commentDetailItem.email}</div>
        <div className={cx('commendCard-info')}>
            <h3 className={cx('commentCard-body')}>{commentDetailItem.body}</h3>
        </div> 
    </div>
  )
}
