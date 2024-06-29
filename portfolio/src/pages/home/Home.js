import React from 'react'
import './home.css'
import Profile from '../../images/photo.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export default function Home() {
  return (
    <section className='home section grid'>
      <img className='home__img' src={Profile} alt='...'/>

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Husniddin Akramov.</span> Web Developer
          </h1>
          <p className='hame_description'>
            I'm a Ferghana web developer & passionate about creating great software that improves the lives of those around me.
          </p>
          <Link to={'/about'} className='button'>
            More About Me{''}
            <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className='color__block'></div>
    </section>
  )
}
