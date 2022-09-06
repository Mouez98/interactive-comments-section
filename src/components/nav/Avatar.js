import React from 'react';

const Avatar = ({ user }) => {
  return <img src={user.image} alt={user.username} />
};

export default Avatar;
