import React from 'react'
import { personalInfo } from './data'

export default function Info() {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className='info__item' key={index}>
            <span className='info__title'>{title}</span>
            <span className='info__description'>{description}</span>
          </li>
        )
      })}
      <li className='info__item'>
        <span className='info__title'>Phone : </span>
        <a href='tel:+998994841807' target='_blank' className='info__description'>+998994841807</a>
      </li>
      <li className='info__item'>
        <span className='info__title'>Email : </span>
        <a href='mailto:akramovh1807@gmail.com' target='_blank' className='info__description'>akramovh1807</a>
      </li>
      <li className='info__item'>
        <span className='info__title'>Telegram : </span>
        <a href='https://t.me/akramov_h1807' target='_blank' className='info__description'>akramov_h1807</a>
      </li>

    </>
  )
}
