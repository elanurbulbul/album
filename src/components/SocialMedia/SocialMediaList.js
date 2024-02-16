import React from 'react'
import { socialMedia } from '../Footer/data'
import '../index.scss';
import SociamMediaItem from './SocialMediaItem';


export default function SocialMediaList() {
  return (
    <div>
        <ul>
            {socialMedia.map((item, index) => {
                return (
                    <SociamMediaItem key={index} item={item} />
                )
            })}
        </ul>
    </div>
  )
}
