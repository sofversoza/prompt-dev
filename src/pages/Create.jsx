import React from 'react'
import { Link } from "react-router-dom"
import Navbar from '../components/Navbar'
import "../styles/PromptPage.css"
import CreatePrompt, { TextArea } from '../components/styled/CreatePrompt.style'
import PageHeader, { Container, StyledLink, PageTitle } from "../components/styled/PageHeader.styled"

export default function Create() {
  return (
    <>
      <Navbar />
      <Container> 
        <StyledLink as={Link} to="/">Back to Home</StyledLink>
        <PageTitle>Compose</PageTitle>
        <hr />
        <CreatePrompt />
      </Container>
    </>
  )
}
