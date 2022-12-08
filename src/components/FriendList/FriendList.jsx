import PropTypes from 'prop-types';
import { FriendCard } from './friendCard.jsx';
import { Friends } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendCard key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
