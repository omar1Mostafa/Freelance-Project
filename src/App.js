import './App.css';
// Navbar Componant
import NavbarComponant from './Componants/NavbarComponant';

// Home Componant
import HomeComponant from './Componants/HomeComponant';

// About Us
import Overview from './Componants/AboutUs/Overview';
import Values from './Componants/AboutUs/Values';
import WelcomeLetter from './Componants/AboutUs/WelcomeLetter';

// Admission
import Admission from './Componants/Admission/Admission';
import Apply from './Componants/Admission/Apply'

// Co-Curricular
import Art from './Componants/Co-Curricular/Art'
import Sports from './Componants/Co-Curricular/Sports'
import TechInno from './Componants/Co-Curricular/TechInno'

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

 <Route path={"/Overview"} exact component={Overview}/>
 <Route path={"/Values"} exact component={Values}/>
 <Route path={"/WelcomeLetter"} exact component={WelcomeLetter}/>
 
 {/* Admission Routes */}

 <Route path={"/Admission"} exact component={Admission}/>
 <Route path={"/Apply"} exact component={Apply}/>

{/* Co-Curricular Routes */}


<Route path={"/Art"} exact component={Art}/>
<Route path={"/Sports"} exact component={Sports}/>
<Route path={"/TechInno"} exact component={TechInno}/>

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
