import React from 'react';

const Greet = ({ user = 'User' }) => {
  const [name, setName] = React.useState(user);

  return <div onClick={() => setName('Pinocchio')}>Hello, {name}!</div>;
};

export default Greet;
