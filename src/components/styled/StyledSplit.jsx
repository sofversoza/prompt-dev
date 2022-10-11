import styled from "styled-components"
import LeftBar from "../LeftBar"

const Container = styled.div`
  display: flex;
`

const Pane = styled.div`
  flex: ${props => props.weight};
  border-right: 1px solid rgb(222, 217, 217);
`

export const StyledSplit = ({ 
  children, 
  leftWeight = 1,
  rightWeight = 7,
}) => {
  const right = children;

  return (
    <Container>
      <Pane weight={leftWeight}> 
        <LeftBar />
      </Pane>
      <Pane weight={rightWeight}> 
        {right}
      </Pane>
    </Container>
  )
}
