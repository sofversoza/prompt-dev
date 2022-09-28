import styled from "styled-components"

export const Container = styled.div`
  width: 75%;
  margin: 8% auto;
`
export const PageTitle = styled.h1`
  font-size: 1.8em;
  margin-bottom: -1%;
  margin-top: 3%;
`
export const StyledLink = styled.a`
  color: palevioletred;
  font-weight: bold;
  font-size: 1em;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: black;
  }
`

// export default function PageHeader({ children }) {
//   const [link, title] = children

//   return (
//     <Container>
//       <StyledLink>{link}</StyledLink>
//       <PageTitle>{title}</PageTitle>
//       <hr />
//     </Container>
//   )
// }
