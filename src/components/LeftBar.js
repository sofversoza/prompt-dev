import React from 'react'
import { Link } from 'react-router-dom'
import { GiSpellBook } from 'react-icons/gi'
import { BsPaperclip } from 'react-icons/bs'
import { ImQuill } from 'react-icons/im'
import { MdSettingsSuggest } from 'react-icons/md'
import '../styles/Sidebar.css'

export default function RightBar() {

  return (
    <div className="leftbar">
      <div className="icon-cont">
        <Link to="/create">
          <ImQuill className="icons smaller" />
        </Link>
        <Link to="/all-prompts">
          <GiSpellBook className="icons" />
        </Link>
        <BsPaperclip className="icons"/>
        <Link to="/settings">
          <MdSettingsSuggest className="icons" />
        </Link>
      </div>
    </div>
  )
}
