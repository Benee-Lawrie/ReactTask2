import React from 'react';
import './App.css';
import Profile from './components/profile';

function App() {

  const users = [
    { Name: 'Taiye Kehinde', Boi: 'Fashion Designer', DateOfBirth: '29/05/1997' },
    { Name: 'Sonia Nelson', Boi: 'Make-Up Artist', DateOfBirth: '13/05/2003' },
    { Name: 'Charles Nwankwo', Boi: 'Graphic Designer', DateOfBirth: '04/02/1998' },
    { Name: 'Benee Lawrie', Boi: 'Song Writer', DateOfBirth: '09/06/2000' },
  ];

  return (
    <div className="box">
      <Profile users={users} />
    </div>
  );
}

export default App;