import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar(props) {
 
  return (
       <nav>
      <div className="links">
        <ul>
          <li>
          <Link to ='/view'>
            <span className='nav-item'>VIEW BOOK</span>
         </Link>
          </li>
          <Link to ='/add'>
            <span className='nav-item'>ADD BOOK</span>
         </Link>
         <Link to ='/edit'>
            <span className='nav-item'>EDIT BOOK</span>
         </Link>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar;