import PropTypes from 'prop-types';
import { AiFillTag } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import {GiShadowFollower} from "react-icons/gi";
import {MdOutlineLocationCity} from 'react-icons/md';

import {ProfileWrap,ProfileName,Image,Name,Tag,Location,List,Item,StatsTitle,StatsText} from "./profile.styled";

 export const Profile = ({username, tag, location, avatar, stats:{followers,views,likes}}) => {

  return (<ProfileWrap>
    <ProfileName>
      <Image
        src={avatar}
        alt={username}
      />
      <Name>{username}</Name>
      <Tag><AiFillTag size={16}/>{tag}</Tag>
      <Location><MdOutlineLocationCity size={16}/> {location}</Location>
    </ProfileName>
  
    <List>
    <Item>
      <StatsTitle><GiShadowFollower size={12}/>  Followers</StatsTitle>
      <StatsText>{followers}</StatsText>
    </Item>
    <Item>
      <StatsTitle><AiFillEye size={12}/>   Views</StatsTitle>
      <StatsText>{views}</StatsText>
    </Item>
    <Item>
      <StatsTitle><FcLike size={12}/>   Likes</StatsTitle>
      <StatsText>{likes}</StatsText>
    </Item>
  </List>
  </ProfileWrap>);
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

