import React, { useState } from 'react';

export default function JoinActivity({ sportsActivity }) {
  const [join, setJoin] = useState(false);

  const handleJoin = () => {
    setJoin(true);
  };

  const handleLeave = () => {
    setJoin(false);
  };

  return (
    <div className='join'>
      <button onClick={handleJoin}>JOIN {sportsActivity}</button> <br></br><br></br>
      <button onClick={handleLeave}>LEAVE {sportsActivity}</button>
      <p>{join ? `You have joined ${sportsActivity} team.` : `You have left ${sportsActivity}. team`}</p>
    </div>
  );
}
