import React from "react"
import Card from "./Card"

// import { useState, useEffect } from 'react';
// import { DashBoardData, GetAuthenication } from '../ServerMethod/Servermetho
export default function Dashboard(props) {

 
//   let [state, setstate] = useState([]);

//   useEffect(() => {
//       async function fetchData() {
//         //   const hastoken = await GetAuthenication()
//           console.log("hastoken", hastoken)
//           if (hastoken) {
//               let searchresults = await DashBoardData();
            
//               setstate(searchresults)
//               console.log("------",searchresults,'state' ,state)
//           }
//       }
//       fetchData()
//   }, []);

  

  return (
    <>


   {
  
    <div className="lyst">
      {/* <h5 className="heead"> Default Dashboard</h5> */}
         {/* <Card
 key={index}
clientName={props.name}
clientEmail={props.email}
loanAmount={props.loanAmount}
loanStatus={props.loanStatus}
         /> */}
          <Card          
        //   title={(state.Introduction ? state.Introduction.title : "Loading...")}
            title="My shoes"
           imgsrc={require('../images/shoes.jpg')}
           body= "A shoe is an item of footwear intended to protect and comfort the human foot. They are often worn with a sock. Shoes are also used as an item of decoration and fashion. "
        //   body={(state.Introduction ? state.Introduction.body : "Loading...")}

          />
{/* 
           <Card */}
           
        {/* //    title="My Workplace"
        //    imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSguOXCvMigKPFrF3SljQRocNeJ8Q_2EAWrg&usqp=CAU'
        //    body={(state.AssignedMe ? state.AssignedMe.body : "Loading...")}
            
          /> */}
        <Card
        title="Careem Ride"
           imgsrc={require('../images/careem.jpg')}
          body="Careem is the everyday Super App for the greater Middle East region, providing a host of daily services that people need to move around,and transfer money."
        // //   title="Your Company JIRA"
        // //   imgsrc="https://static.tildacdn.com/tild3963-6161-4234-b238-663936633464/4.png"
        // //   body={(state.Projects ? state.Projects.projectname : "Loading...")}
        // //   leadname={(state.Projects ? state.Projects.leadname : "Loading...")}

            
          /> 
         {/* <Card
         title="Careem Ride"
         imgsrc={require('../images/careem.jpg')}
        body="Careem is the everyday Super App for the greater Middle East region, providing a host of daily services that people need to move around,and transfer money."
         // title="Activity Stream"
        //   body={(state.ActivityStream ? state.ActivityStream.companyname:  "Loading...")}
          //imgsrc='https://inlogiq.com/wp-content/uploads/2021/07/EXalate-blog.jpg'
          /> */}
           
    </div> 
}   
    </>
      
  )
}



