import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {

   return (

    <ul className="friend-list list">

    {friends.map(({id,avatar,name}) => (

   <li key={id} className="item">
    <span className="status"></span>
    <img className="avatar" src={avatar} alt={name} width="48"/>
    <p className="name">{name}</p>
</li>
    ))}

    </ul>
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
