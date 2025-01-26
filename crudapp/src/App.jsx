import { useState, useEffect } from 'react'
import GuestList from './GuestList'
import GuestForm from './GuestForm'
import './App.css'
import {getGuests, addGuest, updateGuest, deleteGuest} from './hotelData'



function App() {
  const [guests, setGuests] = useState([])
  const [enlistedGuests, setEnlistedGuests] = useState([])

useEffect(() => {getGuests()
  .then((data) => setGuests(data))
  .catch((error) => console.log('error fetching guests'))}, [])

const addTheGuest = (guest) => {
  addGuest(guest)
  .then((data) => setGuests([...guests, data]))
  .catch((error) => console.log('error adding guest'))
};

const updateTheGuest = (id, guest) => {
  updateGuest(id, guest)
  .then((data) => {
    const newGuests = guests.map((g) => g.id === id ? data : g)
    setGuests(newGuests)
  })
  .catch((error) => console.log('error updating guest'))
};

const deleteTheGuest = (id) => {
  deleteGuest(id)
  .then(() => {
    const newGuests = guests.filter((g) => g.id !== id)
    setGuests(newGuests)
  })
  .catch((error) => console.log('error deleting guest'))
};

  return (
      <div className='container'>
        <h1>Honoured Guests Include: </h1>
              <div className='guestlist'>
                <GuestList  guests={guests} setEnlistedGuests={setEnlistedGuests} deleteGuest={deleteTheGuest} />
            </div>
            <div className='guestform'>
        <GuestForm addGuest={addTheGuest} updateGuest={updateTheGuest} enlistedGuests={enlistedGuests} />
             </div>
</div>
  );
}

export default App
