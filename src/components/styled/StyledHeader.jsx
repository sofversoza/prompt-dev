import React from 'react'
import Navbar from "../Navbar"
import styled from "styled-components"
import { Link } from "react-router-dom"


const StyledLink = styled(Link)`
  font-size: 1em;
`
export const StyledTitle = styled.h1`
  font-size: 2em;
  margin: 1em 0 -0.7% 0;
`
const Container = styled.div`
  width: 75%;
  margin: 6% auto;
`

export default function StyledHeader({ children }) {
  return (
    <>
      <Navbar />
      <Container>
        <StyledLink to="/">Back to Home</StyledLink>
        <StyledTitle>{children}</StyledTitle>
        <hr />
      </Container>
    </>
  )
}
