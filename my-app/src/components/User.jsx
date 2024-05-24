import React from 'react';

const User = ({ user }) => {
  return (
    <div className="user">
      <h3 className='name'>
        {user.Name}</h3>
        
        <div className='details'>
        <p>{user.Boi}</p>
        <p>Date of Birth: {user.DateOfBirth}</p>
        </div>
     
    </div>
  );
};

export default User;