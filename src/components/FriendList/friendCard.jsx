import PropTypes from 'prop-types';

import {
  FriendItem,
  Status,
  Avatar,
  FriendName,
} from './FriendList.styled.jsx';

export function FriendCard({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
