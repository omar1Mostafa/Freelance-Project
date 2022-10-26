import React from "react"
import { Link } from "react-router-dom"

function NavbarComponant(){











    return(
        <>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/Home">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
                    

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us
          </a>
          <ul class="dropdown-menu">
            <li><Link className="dropdown-item" to="/Overview">Overview</Link></li>
            <li><Link class="dropdown-item" to="/WelcomeLetter">Welcome Letter</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/Values">Our Values</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Education
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/JuniorSchool">Junior School</Link></li>
            <li><Link class="dropdown-item" to="/SeniorSchool">Senior School</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/DigitalLearning">Digital Learning</Link></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Co-Curricular
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Art">Art</Link></li>
            <li><Link class="dropdown-item" to="/TechInno">Technology and Innovation</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/Sports">Sports</Link></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Community
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Teachers">Teachers</Link></li>
            <li><Link class="dropdown-item" to="/OurClub">Our Club</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/Alumni">Alumni</Link></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admissions
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Admission">Admissions Process</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/Apply">Apply Now</Link></li>
          </ul>
        </li>


        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/ContactUs">Contact Us</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>







        </>
    )
}


export default NavbarComponant