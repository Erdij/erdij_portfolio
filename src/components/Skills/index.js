import { useState, useEffect } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"

import "./index.scss"

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)
  }, [])
  return (
    <>
      <div className='container skills-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                "F",
                "r",
                "o",
                "n",
                "t",
                "e",
                "n",
                "d",
                " ",
                "S",
                "k",
                "i",
                "l",
                "l",
                "s",
              ]}
              idx={15}
            />
          </h1>
          <div className='skills-area'>
            <div className='skill'>
              <img src='' alt='' />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Skills
