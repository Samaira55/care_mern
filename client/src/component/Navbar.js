import React from 'react'
// import {logoutFunction} from '../ServerMethod/Servermethods';



function Navbar() {


  return (
    <div>
    <div className="main">
        
        <nav>
            <div class="nav-wrapper white">
         
            <ul class="left hide-on-med-and-down">
               <li><a href="sass.html"><i class="material-icons">apps</i></a></li>
               
               <li><a href=""><img src={require('../images/logo.png')} className="brand-logo"/></a></li>
               <div style={{clear: "both;"}}></div>

              <div className="ico">
               <li><a href="sass.html"  class="icns">Projects</a></li>
               <li><a href="sass.html"  class="icns">Finacial Tracking</a></li>
               <li><a href="sass.html" class="icns"> Property Management</a></li>
               <li><a href="sass.html"  class="icns">Loan History</a></li>
             <li><input className='search-input' type="text" placeholder='Search' /></li>
            
              <li><a class="waves-effect waves-light blue btn ">OnCall</a></li>
              </div>
            </ul>
           
              <ul class="right hide-on-med-and-down">
            
                <li><a href="badges.html" className='ico2'><i class="material-icons right">notifications</i></a></li>
                <li><a href="sass.html" className='ico2'><i class="material-icons right">help</i></a></li>
                <li><a href="badges.html" className='ico2'><i class="material-icons right">email</i></a></li>
                <li><a href="sass.html" className='ico2'><i class="material-icons right">account_circle</i></a></li>
                {/* <li><span class="material-icons logout"
                {/* onClick={logoutFunction} >
                  logout */}
                {/* </span></li> */} 
                {/* <li><a class="waves-effect waves-light blue btn">Logout</a></li> */}
            </ul>
            </div>
        </nav>
    </div>
      
    </div>
  )
}

export default Navbar




//********************************************* */





