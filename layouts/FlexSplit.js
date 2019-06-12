import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5vw;
  max-width: 50%;
  min-width: 25%;
`;

const Rest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 95%;
  flex-grow: 1;
`;

const FlexSplit = ({ children }) => {
  const [a, ...rest] = React.Children.toArray(children)

  return (
    <Card>
      <Column>{a}</Column>
      <Rest>{rest}</Rest>
    </Card>
  )
}

export default FlexSplit