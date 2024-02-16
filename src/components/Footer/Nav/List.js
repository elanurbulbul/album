import React from 'react'
import { dataNav, socialMedya } from '../data'
import NavItem from './Item'
import '../index.scss';

export default function List() {
  return (
    <nav>
        <ul>
            {dataNav.map((item, index) => {
                return (
                    <NavItem key={index} item={item} />
                )
            })}
        </ul>
    </nav>

  )
}
