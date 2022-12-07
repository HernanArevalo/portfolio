import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
    <nav>
        <ul className="navbar-list">
            <li className="navbar-item" id='me'>
                <a href="#">
                    <span>Me</span>
                    <div className="navbar-icon">
                        <box-icon type='solid' name='user' size="md" color="rgb(42, 93, 131)"></box-icon>
                    </div>
                </a>

            </li>
            <li className="navbar-item">
                <a href="#">
                    <span>Projects</span>
                    <div className="navbar-icon">
                        <box-icon type='solid' name='collection' size="md" color="rgb(42, 93, 131)"></box-icon>
                    </div>
                </a>
            </li>
            <li className="navbar-item">
                    <a href="#">
                        <span>Skills</span>
                        <div className="navbar-icon">
                            <box-icon name='select-multiple' size="md" color="rgb(42, 93, 131)"></box-icon>
                        </div>
                    </a>
            </li>
            <li className="navbar-item">
                <a href="#">
                    <span>Contacts </span>
                    <div className="navbar-icon">
                        <box-icon type='solid' name='send' size="md" color="rgb(42, 93, 131)"></box-icon>
                    </div>
                </a>
            </li>

        </ul>

    </nav>
  </div>

)
}
