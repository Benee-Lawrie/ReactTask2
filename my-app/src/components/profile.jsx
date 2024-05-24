import React, { useEffect, useState } from 'react';
import User from './User';

const Profile = ({ users }) => {
  const [localUsers, setLocalUsers] = useState([]);

  useEffect(() => {

    setTimeout(() => {
      setLocalUsers(users);
    }, 1000); 
  }, []);

  return (
    <div className="body">
      {localUsers.map((user) => (
        <User key={user.Name} user={user} />
      ))}
    </div>
  );
};

export default Profile;