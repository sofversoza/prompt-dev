import styled from "styled-components"

const Container = styled.div`
  display: flex
`

const Pane = styled.div`
  flex: ${props => props.weight || 1}
`

export default function SplitScreen({ children }) {
  const [left, right] = children

  return (
    <Container>
      <Pane>
        {left}
      </Pane>
      <Pane weight={9}>
        {right}
      </Pane>
    </Container>
  )
}
