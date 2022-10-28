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
            <li><Link  to="/Test">About Us</Link></li>
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

                    {/* ///////////////////////////////////////////////////////////// */}
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Co-Curricular
          </a>
          <ul class="dropdown-menu">
              {/* ////////////////// KG//////////////////// */} 
            <li><Link class="dropdown-item">
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    KG
                  </a>
                  <ul class="dropdown-menu"> 
                      {/* //////////////////KG 2//////////////////// */}
                    <li><Link class="dropdown-item" to="/KGOne">KG 1</Link></li>
                      {/* //////////////////KG 2//////////////////// */}
                    <li><Link class="dropdown-item" to="/KGTwo">KG 2</Link></li>
                  </ul>
              </li>
            </Link></li>
              {/* ////////////////// Primary//////////////////// */}
            <li><Link class="dropdown-item">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Primary
                </a>
                <ul class="dropdown-menu">
                    {/* //////////////////Primary 1//////////////////// */} 
                  <li><Link class="dropdown-item" to="/primaryOne">Primary 1</Link></li>
                    {/* //////////////////Primary 2//////////////////// */}
                  <li><Link class="dropdown-item" to="/primaryTwo">Primary 2</Link></li>
                    {/* //////////////////Primary 3//////////////////// */}
                  <li><Link class="dropdown-item" to="/primaryThr">Primary 3</Link></li>
                    {/* //////////////////Primary 4//////////////////// */} 
                  <li><Link class="dropdown-item" to="/primaryFour">Primary 4</Link></li>
                    {/* //////////////////Primary 5//////////////////// */}
                  <li><Link class="dropdown-item" to="/primaryFi">Primary 5</Link></li>
                    {/* //////////////////Primary 6//////////////////// */}
                  <li><Link class="dropdown-item" to="/primarySix">Primary 6</Link></li>
                </ul>
              </li>
            </Link></li>
              {/* //////////////////Pre-School//////////////////// */}
            <li><Link class="dropdown-item">
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    prep
                  </a>
                  <ul class="dropdown-menu"> 
                      {/* //////////////////prep 1//////////////////// */}
                    <li><Link class="dropdown-item" to={"/prepOne"}>prep 1</Link></li>
                      {/* //////////////////prep 2//////////////////// */}
                    <li><Link class="dropdown-item" to={"/prepTwo"}>prep 2</Link></li>
                      {/* //////////////////prep 3//////////////////// */}
                      <li><Link class="dropdown-item" to={"/prepTh"}>prep 3</Link></li>
                  </ul>
              </li>
            </Link></li>
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

        <li class="nav-item">
            <li><Link  to="/Apply">Apply Now</Link></li>

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