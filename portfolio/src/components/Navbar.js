import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [link, setLink] = useState(1);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            handleLinkClick(1);
        } else if (location.pathname === '/about') {
            handleLinkClick(2);
        } else if (location.pathname === '/portfolio') {
            handleLinkClick(3);
        } else if (location.pathname === '/contact') {
            handleLinkClick(4);
        }
    }, [location.pathname]);

    const handleLinkClick = (num) => {
        setLink(num);
    };
  return (
      <div className='site_navbar'>
          <div className='navbar_wrapper'>
              <Link onClick={() => { handleLinkClick(1) }} to={`/`} className='site-logo'>Akramov Husniddin</Link>
              <div className='navbar-links_wrap'>
                  <Link className={`navbar_link ${link === 1 ? "link_active" : ""}`} to={'/'}>Home</Link>
                  <Link className={`navbar_link ${link === 2 ? "link_active" : ""}`} to={'/about'}>About</Link>
                  <Link className={`navbar_link ${link === 3 ? "link_active" : ""}`} to={'/portfolio'}>Portfolio</Link>
                  <Link className={`navbar_link ${link === 4 ? "link_active" : ""}`} to={'/contact'}>Contact</Link>
              </div>
          </div>
      </div>
  )
}
