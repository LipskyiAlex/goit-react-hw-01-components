import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { AiFillTag } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import {GiShadowFollower} from "react-icons/gi";
import {MdOutlineLocationCity} from 'react-icons/md';

 export const Profile = ({username, tag, location, avatar, stats:{followers,views,likes}}) => {



   return (<div className={css.profile}>
  <div className={css.profileName}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}><AiFillTag className={css.icon} size={16}/>{tag}</p>
    <p className={css.location}><MdOutlineLocationCity className={css.icon} size={16}/> {location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
      <span className={css.spantitle}><GiShadowFollower className={css.statsIcon} size={12}/>  Followers</span>
      <span className={css.spantext}>{followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.spantitle}><AiFillEye className={css.statsIcon} size={12}/>   Views</span>
      <span className={css.spantext}>{views}</span>
    </li>
    <li className={css.item}>
      <span className={css.spantitle}><FcLike className={css.statsIcon} size={12}/>   Likes</span>
      <span className={css.spantext}>{likes}</span>
    </li>
  </ul>
</div>);
 }



 Profile.propTypes = {

  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
   stats: PropTypes.shape({
    followers:PropTypes.number.isRequired,
    views:PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired
   })
   

 }

