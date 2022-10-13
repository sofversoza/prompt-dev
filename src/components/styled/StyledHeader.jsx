import React from 'react'
import Navbar from "../Navbar"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  border-bottom: 1px solid rgb(222, 217, 217);
`
const Box = styled.div`
  width: 75%;
  height: 250px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledTitle = styled.h1`
  font-size: 2em;
  margin: 1% 0 1% 0;
`
const Details = styled.p`
  font-size: 0.9em;
`

export default function StyledHeader({ children }) {
  const [pageTitle, pageDetails] = children;
  return (
    <>
      <Navbar />
      <Container>
        <Box>
          <StyledTitle>{pageTitle}</StyledTitle>
          <Details>{pageDetails}</Details>
        </Box>
      </Container>
    </>
  )
}
