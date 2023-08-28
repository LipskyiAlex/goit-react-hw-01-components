import React from "react";
import {Profile} from "./Profile/Profile.jsx";
import {Statistics} from "./Statistics/Statistics.jsx";
import { FriendList } from "./FriendList/FriendList.jsx";
import {TransactionHistory} from './TransactionHistory/TransactionHistory.jsx';
import {MainContainer,WrapContainer} from "./app.styled";

import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json"


export const App = () => {
  return ( 
     <MainContainer>
      <WrapContainer>
<Profile
avatar={user.avatar}
username={user.username}
tag={user.tag}
location={user.location}
 stats={user.stats}
/>  
  <Statistics
     
     items={data}
     title={"Upload stats"}
/>

  <FriendList 
       
       friends={friends}
  />

<TransactionHistory
      transactions = {transactions}
/>
     </WrapContainer> 
     </MainContainer>
   
  )
};


