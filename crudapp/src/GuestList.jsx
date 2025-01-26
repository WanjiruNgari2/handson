import React from 'react'

export default function GuestList({guests, setEnlistedGuests, deleteGuest}) {

  return (
    <div>
      <h3>Guests List:</h3>
      {guests.length > 0 ? 
      (guests.map((guest) => (
        <div key={guest.id}>
          <p>{guest.name}</p>
          <p>{guest.room}</p>
          <button onClick={() => setEnlistedGuests(guests)}>Enlist</button>
          <button onClick={() => deleteGuest(guest.id)}>Delete</button>
        </div>
      ))) : (<p>No guests Fetched</p>)}
    </div>
  )
}
