import React from 'react';

function FriendList ({friends}){
  return (
    <li>
      {friends.map(friend => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </li>
  );
}

export default FriendList;