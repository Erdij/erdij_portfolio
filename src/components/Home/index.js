import React, { useEffect, useState } from "react"
import E_letter from "../../assets/images/E_letter.png"
import { Link } from "react-router-dom"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import Loader from "react-loaders"

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["r", "d", "i", "j"]
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ]
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)
  }, [])
  return (
    <>
      <div className='container home-page '>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={E_letter} alt='developer' />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / JavaScript / React.js</h2>
          <Link to='/contact' className='flat-button'>
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Home
