import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from "../hooks/useLogout"
import { GiSpellBook } from 'react-icons/gi'
import { BsPaperclip } from 'react-icons/bs'
import { ImQuill, ImHome3 } from 'react-icons/im'
import { MdSettingsSuggest, MdLogout } from 'react-icons/md'
import '../styles/Sidebar.css'

export default function RightBar() {
  const { logout } = useLogout()

  return (
    <div className="leftbar">
      <div className="icon-cont">
        <Link to="/">
          <ImHome3 className="icons smaller" />
        </Link>
        <Link to="/create">
          <ImQuill className="icons smaller" />
        </Link>
        <Link to="/prompts">
          <GiSpellBook className="icons" />
        </Link>
        <BsPaperclip className="icons"/>
        <Link to="/settings">
          <MdSettingsSuggest className="icons" />
        </Link>
        <Link onClick={logout}>
          <MdLogout className="icons smaller" />
        </Link>
      </div>
    </div>
  )
}
