import PropTypes from 'prop-types';

import {List,Item,Name,Status,Image} from "./friendlist.styled";


export const FriendList = ({friends}) => {

   return (

    <List>

    {friends.map(({id,avatar,name,isOnline}) => (

   <Item key={id}>
    <Status status={isOnline}></Status>
    <Image src={avatar} alt={name}/>
    <Name>{name}</Name>
</Item>
    ))}

    </List>
   )
}

FriendList.propTypes = {
     
    friends: PropTypes.arrayOf (

        PropTypes.shape({
        id:PropTypes.number.isRequired,
        avatar:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired
    }))
}
