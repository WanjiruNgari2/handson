import React, {useEffect, useState} from 'react'

export default function GuestForm({addTheGuest, updateTheGuest, enlistedGuests}) {
  
  const [guest, setGuest] = useState({name: '', email: ''})

  useEffect(() => {
    if(enlistedGuests) {
      setGuest(enlistedGuests)
    } else {
      setGuest({name: '', email: ''})
    }
  }, [enlistedGuests])  

  
  
  const handleChange = (e) => {   
    setGuest({...guest, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(guest.id) {
      updateTheGuest(guest)
    } else {
      addTheGuest(guest)
    }
    setGuest({name: '', email: ''})
  } 

  useEffect(() => {
    setGuest({name: '', email: ''})
  }, [])



  
  return (
    <>
      <h3>Guest Form:</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={guest.name} onChange={handleChange} placeholder="Name" />
        <input type="email" name="email" value={guest.email} onChange={handleChange} placeholder="Email" />
        <button type="submit">{guest.id ? 'update' : 'Add'} Guest</button>
      </form>
</>
  )
}
