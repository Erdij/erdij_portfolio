import React from "react"
import E_letter from "../../assets/images/E_letter.png"
import { Link } from "react-router-dom"
import "./index.scss"

const Home = () => {
  return (
    <>
      <div className='container home-page '>
        <div className='text-zone'>
          <h1>
            Hi, <br /> I'm
            <img src={E_letter} alt='developer' />
            rdij
            <br />
            web developer
          </h1>
          <h2>Frontend Developer / JavaScript / React.js</h2>
          <Link to='/contact' className='flat-button'>
            {" "}
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
