import React from 'react';
import Profile from './Components/Profile';
import Counter from './Components/Counter';
import DelayedToggle from './Components/DelayedToggle';
import UserProfile from './Components/UserProfile';

const App = () => {
  return <div>
     <Profile username="gyutae" name="alphonse" />
     <Counter />
     <DelayedToggle />
     <UserProfile id={1} />
  </div>  
};
export default App;
