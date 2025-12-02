import React from 'react'
import { Link } from 'react-router'
import "../../css/navbar.css"
function Navbar() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li className='iteam'><Link to="/">Home</Link></li>
          <li className='iteam'><Link to="/teams">Teams</Link></li>
          <li className='iteam'><Link to="/courses">Courses</Link></li>
          <li className='iteam'><Link to="/internships">Internships</Link></li>
          <li className='iteam'><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar