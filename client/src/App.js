import React from 'react';
import Navbar from './component/Navbar';
import Dashboard from './component/Dashborad';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Subnav from './component/Subnav';
// import Dash from './component/Dash';
// import CardD from './component/CardD';
// import Login from './component/Login';
// import Logout from './component/Logout';
// import AppRouting from './Routes/AppRoutes';
// import {Outlet} from 'react-router-dom';
import Profile from './component/Profile';



function App() {
  return (
    <div  >

       {/* <AppRouting/> */}
        {/* <div><Outlet /></div> */}
        <Navbar/>
        {/* <Dash/> */}
      {/* <Profile/> */}
      {/* <Login/> */}
       {/* <Logout/> */}
       {/* <CardD/> */}
        {/* <Subnav/> */}
        <Dashboard/>
        {/* <Home/>
        <Login/>
        <Signup/> */}

 
    </div>
  );
}

export default App;
