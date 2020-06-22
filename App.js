import React from 'react';

import './App.css';
import data from './data.json';
import './css/bootstrap.min.css';
import profilepic from './srkr.png';




  let profiles=data.profile;
function App() {

  return (
    <div className="row justify-content-center">
   
    {profiles.map((value)=>( 
       <div className="col-lg-4 col-md-4 col-sm-10 mt-5">
     
        <div className="card" style={{width:"25rem",fontStyle:"italic",boxShadow:"0px 8px 8px -8px #000"}}>
            <img  src={profilepic}  />
            <div className="card-body text-center">
                 <h1>{value.details.name}</h1>
                 <div className="card-text">
                         <h4> {value.details.role}</h4>
                 </div>

            </div>
         <input type = "button" value = "Redirect Me" onclick = {<Resume></Resume>}/>
        </div>


     </div>))
  }
   
    
   </div>
  )
}

    



export default App;