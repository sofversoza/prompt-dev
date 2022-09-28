import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { query, collection, onSnapshot } from 'firebase/firestore'
import Navbar from '../components/Navbar'
import { Container, PageTitle, StyledLink } from '../components/styled/PageHeader.styled'
import styled from "styled-components"

const Card = styled.div`
  background-color: pink;
  width: 100%;
  padding: 1em;
  margin: 3em 0;
`
const Tag = styled.span`
  min-width: 55px;
  background: #b5c8d4;
  margin: 0.3em;
  border-radius: 20px;
`


export default function Read() {
  const [allprompts, setAllPrompts] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'prompts'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let promptsArr = []
      querySnapshot.forEach((doc) => {
        promptsArr.push({...doc.data(), id: doc.id})
      })
      setAllPrompts(promptsArr)
      console.log(promptsArr)
    })
    return () => unsubscribe()
  }, [])

  const allPrompts = allprompts.map((prompt) => {
    return (
      <Card key={prompt.id}>
        <h3>{prompt.title}</h3>
        <p>{prompt.body}</p>
        <Tag>{prompt.tags}</Tag>
      </Card>
    )
  })

  return (
    <>
      <Navbar />
      <Container>
        <StyledLink>Back to Home</StyledLink>
        <PageTitle>All Prompts</PageTitle>
        <hr />
        {allPrompts}
      </Container>
    </>
  )
}
