import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${p => p.secondary ? '#9EB9D6' : '#F1D67F'};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${p => !p.secondary && css`
  text-align: left;
    margin-right: 3em;
    font-family: Ricochet;
    font-weight: bold;
  `};
`;

const Overview = ({ secondary, children }) => (
  <Container secondary={secondary}>
    <Content secondary={secondary}>
      {children}
    </Content>
  </Container>
)

export default Overview;