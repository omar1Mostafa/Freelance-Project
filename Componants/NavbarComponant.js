import React from "react"
import { Link } from "react-router-dom"
import "./navbar.scss"
import logo from "../assets/whitelogo.png"
function NavbarComponant() {

  return (
    <>
    <nav id="navBar">
        <div className="navContainer">
        <div className="navImg">
        <Link  to="/home">
        <img src={logo} alt="Agial Logo">
          </img>
        </Link>

          
        </div>
        <div className="navItem">
          <ul>
            <li><Link to="/aboutus" className="link" >About Us</Link>
              <ul className="dropDown">
                <li>Over View</li>
                <li>Welcome Litter</li>
                <li>Agial Valus</li>
              </ul>
            </li>
            <li>Education
              <ul className="dropDown">
                <li>OverView</li>
                <li>Early Years Foundation Stage</li>
                <li><Link class="dropdown-item" to="/JuniorSchool">Junior School</Link></li>
                <li ><Link class="dropdown-item" to="/SeniorSchool">Senior School</Link></li>
                <li><Link class="dropdown-item" to="/DigitalLearning">Digital Learning</Link></li>
              </ul>
            </li>
            <li>Co-Curricular
              <ul className="dropDown">
                <li>Over View</li>
                <li>The Arts</li>
                <li>Technology And Innovation</li>
                <li>Sports</li>
              </ul>
            </li>
            <li>Community
              <ul className="dropDown">
                <li>Oveview</li>
                <li>Agial Experience</li>
                <li><Link class="dropdown-item" to="/OurClub">Our Club</Link></li>
                <li><Link class="dropdown-item" to="/Teachers">Teachers</Link></li>
                <li><Link class="dropdown-item" to="/Alumni">Alumni</Link></li>

               
              </ul>
            </li>
              <li>Admissions
              <ul className="dropDown">
                <li>Admissions Process</li>
                <li>Admissions Now</li>
              </ul>
            </li>
                <li>          <Link class="nav-link active" aria-current="page" to="/ContactUs">Contact Us</Link>
            </li>

          </ul>

        </div>

        </div>


      </nav>


    </>
  )
}


export default NavbarComponant