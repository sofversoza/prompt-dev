import React from 'react'
import { Link } from 'react-router-dom'
import { GiSpellBook } from 'react-icons/gi'
import { BsPaperclip } from 'react-icons/bs'
import { ImQuill } from 'react-icons/im'
import { MdSettingsSuggest } from 'react-icons/md'
import { BsFillDropletFill } from 'react-icons/bs'
import { GiFairyWand } from 'react-icons/gi'
import '../styles/Sidebar.css'

export default function RightBar() {

  return (
    <div className="leftbar">
      <div className="icon-cont">
        <ImQuill className="icons smaller" />
        <BsPaperclip className="icons"/>
        <GiSpellBook className="icons" />
        <Link to="/settings">
          <MdSettingsSuggest className="icons" />
        </Link>
      </div>

      {/* <hr/>
      <div className="icon-themes">
        <GiFairyWand className="icons smaller" />
        <BsFillDropletFill className="icons smaller violet" />
        <BsFillDropletFill className="icons smaller matcha" />
        <BsFillDropletFill className="icons smaller fluff" />
      </div> */}
    </div>
  )
}
