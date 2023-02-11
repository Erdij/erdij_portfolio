import "./index.scss"
import React from "react"
import { Link, NavLink } from "react-router-dom"
import LogoS from "../../assets/images/logos.jpg"
import LogoSubtitle from "../../assets/images/LogoSubtitle.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faHome,
  faUser,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        <img className='sub-logo' src={LogoSubtitle} alt='erdij' />
      </Link>
      <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink activeclassname='active' className='about-link' to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink
          activeclassname='active'
          className='contact-link'
          to='/contact'
        >
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
        <NavLink activeclassname='active' className='skills-link' to='/skills'>
          <FontAwesomeIcon icon={faClipboard} color='#4d4d4e' />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/%C5%9F%C3%BCkr%C3%BC-erdi-yildirim/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a href='https://github.com/Erdij' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
