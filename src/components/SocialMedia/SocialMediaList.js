import React from 'react'
import { socialMedia } from '../Footer/data'
import './index.scss';
import SociamMediaItem from './SocialMediaItem';
import cx from 'classnames';


export default function SocialMediaList() {
  return (
    <ul className={cx('socialMedia-list')}>
        {socialMedia.map((item, index) => {
            return (
                <SociamMediaItem key={index} item={item} />
            )
        })}
    </ul>
  )
}
