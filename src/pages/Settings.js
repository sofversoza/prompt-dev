import React, { useRef, useState } from 'react'
import UpdateProfile from '../components/UpdateProfile'
import Navbar from '../components/Navbar'

export default function Settings() {

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="page-intro">
          <h1 className="page-title">Settings</h1>
          <hr />
        </div>
        <div className="account-settings">
          <h5>Account</h5>
          {<UpdateProfile />}
        </div>
      </div>  
    </>
  )
}
