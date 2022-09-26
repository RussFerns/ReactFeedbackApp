import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

const AboutLink = () => {
  return (
    <div className='about-link'>

        {/* // Basic Link */}
        {/* <Link to="/about"> <FaQuestion size={30} /> </Link> */}

        {/* // Link with Query Params */}
        <Link to={{
            pathname: "/about",
            search: "?sort=name",
            hash: "#about"
            }}> 
            <FaQuestion size={30} /> 
        </Link>

    </div>
  )
}

export default AboutLink
