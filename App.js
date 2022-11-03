import './App.scss';
// Navbar Componant
import NavbarComponant from './Componants/NavbarComponant';

// Home Componant
import HomeComponant from './Componants/HomeComponant';

// About Us
import AboutUs from './Componants/AboutUs/AboutUs';
import SchoolPolicy from './Componants/AboutUs/SchoolPolicy';

// Admission

import Apply from './Componants/Admission/Apply'

// Co-Curricular

import KGOne from './Componants/Co-Curricular/KG/KGOne'
import KGTwo from './Componants/Co-Curricular/KG/KGTwo'
import primaryOne from './Componants/Co-Curricular/Primary/primaryOne'
import primaryTwo from './Componants/Co-Curricular/Primary/primaryTwo';
import primaryThr from './Componants/Co-Curricular/Primary/primaryThr';
import primaryFour from './Componants/Co-Curricular/Primary/primaryFour';
import primaryFi from './Componants/Co-Curricular/Primary/primaryFi';
import primarySix from './Componants/Co-Curricular/Primary/primarySix';
import prepOne from './Componants/Co-Curricular/Prep/prepOne'
import prepTwo from './Componants/Co-Curricular/Prep/prepTwo';
import prepTh from './Componants/Co-Curricular/Prep/prepTh'


// Community

import Alumni from './Componants/Community/Alumni'
import OurClub from './Componants/Community/OurClub'
import Teachers from './Componants/Community/Teachers'

// Education

import DigitalLearning from './Componants/Education/DigitalLearning'
import JuniorSchool from './Componants/Education/JuniorSchool'
import SeniorSchool from './Componants/Education/SeniorSchool'

// Contact Us 

import ContactUsComponant from './Componants/ContactUsComponant'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"




function App() {
  return (
<>  
<BrowserRouter>
<NavbarComponant/>
<Switch>
{/* Home Routes */}

 <Route path={"/"} exact component={HomeComponant} />
 <Route path={"/Home"} exact component={HomeComponant}/>

 {/*About US Routes  */}

 <Route path={"/AboutUs"} exact component={AboutUs}/>
 <Route path={"/SchoolPolicy"} exact component={SchoolPolicy}/>

 
 {/* Admission Routes */}

 <Route path={"/Apply"} exact component={Apply}/>

{/* Co-Curricular Routes */}


<Route path={"/KGOne"} exact component={KGOne}/>
<Route path={"/KGTwo"} exact component={KGTwo}/>
<Route path={"/primaryOne"} exact component={primaryOne} />
<Route path={"/primaryTwo"} exact component={primaryTwo} />
<Route path={"/primaryThr"} exact component={primaryThr} />
<Route path={"/primaryFour"} exact component={primaryFour} />
<Route path={"/primaryFi"} exact component={primaryFi} />
<Route path={"/primarySix"} exact component={primarySix} />
<Route path={"/prepOne"} exact component={prepOne} />
<Route path={"/prepTwo"} exact component={prepTwo} />
<Route path={"/prepTh"} exact component={prepTh} />


{/* Community Routes */}

<Route path={"/Alumni"} exact component={Alumni}/>
<Route path={"/OurClub"} exact component={OurClub}/>
<Route path={"/Teachers"} exact component={Teachers}/>


{/* Education Routes */}

<Route path={"/DigitalLearning"} exact component={DigitalLearning}/>
<Route path={"/JuniorSchool"} exact component={JuniorSchool}/>
<Route path={"/SeniorSchool"} exact component={SeniorSchool}/>

{/* Contact Us Route */}
<Route path={"/ContactUs"} exact component={ContactUsComponant}/>



</Switch>




</BrowserRouter>
</>



  )
}

export default App;
