import React from "react";
import Profile from "./Profile/profile";
import Statistics from "./Statistics/statistics";

import user from "../data/user.json";
import data from "../data/data.json";



export const App = () => {
  return ( 
     <div>
<Profile
avatar={user.avatar}
username={user.username}
tag={user.tag}
location={user.location}
 stats={user.stats}
/>  
  <Statistics
     
     items={data}
/>

     </div> 
   
  )
};


