import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {

   return (

    <ul className={css.list}>

    {friends.map(({id,avatar,name,isOnline}) => (

   <li key={id} className={css.item}>
    <span className={`${css.status} ${isOnline? css.online:css.offline}`}></span>
    <img className="avatar" src={avatar} alt={name} width="48"/>
    <p className={css.name}>{name}</p>
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
