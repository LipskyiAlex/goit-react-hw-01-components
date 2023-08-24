import React from "react";
import {Profile} from "./Profile/profile.jsx";
import {Statistics} from "./Statistics/statistics.jsx";
import {FriendList} from "./FriendList/friendlist.jsx";
import {TransactionHistory} from './TransactionHistory/transactionHistory.jsx';

import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json"


export const App = () => {
  return ( 
     <div className="main-container">
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

  <FriendList 
       
       friends={friends}
  />

<TransactionHistory
      transactions = {transactions}
/>
     </div> 
   
  )
};


