import React, { useRef, useState } from 'react'
import UpdateProfile from '../components/UpdateProfile'
import '../styles/Settings.css'
import Navbar from '../components/Navbar'

export default function Settings() {


  return (
    <>
      <Navbar />
      <div className="settings">
        <h1 className="page-title">Settings</h1>
        <hr />
        <div className="account-settings">
          <h5>Account</h5>
          {<UpdateProfile />}
        </div>
      </div>  
    </>
  )
}
