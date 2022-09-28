import React, { useState } from 'react'
import styled from "styled-components"

export const Paper = styled.div`
  background-color: #D8DADF;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Input = styled.input`
  padding: 1em;
  margin: 1em auto;
  width: 90%;
  background-color: inherit;
  border: 1px solid rgb(184, 184, 184);
`
export const TextArea = styled.textarea`
  padding: 1em;
  margin: 1em auto;
  min-height: 450px;
  width: 90%;
  resize: none;
  background-color: inherit;
  border: 1px solid rgb(184, 184, 184);
`


export default function CreatePrompt() {
  const [title, setTitle] = useState('')
  

  return (
    <Paper>
      <form>
        <Input placeholder="Title" type="text" />
        <TextArea placeholder="Your words" />
        
      </form>
    </Paper>
  )
}
