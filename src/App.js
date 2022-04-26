import React from 'react'
import Adress from './Component/Profile/Adress'
import MyFullName from './Component/Profile/MyFullName'
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import './App.css'


function App() {
  return (
    <div className='AppComponent'>
      <MyFullName />
      <br />
      <ProfilePhoto />
      <br />
      <Adress />
    </div>
  )
}

export default App