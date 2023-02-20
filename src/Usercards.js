import React from 'react'
import Usercard from './Usercard';

export default function UsercardList({ usercards }) {
  return (
    <div className="card-grid">
      {usercards.map(usercard => {
        return <Usercard usercard={usercard} key={usercard.id} />
      })}
    </div>
  )
}
