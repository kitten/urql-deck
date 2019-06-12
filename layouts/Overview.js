import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #F1D67F;
`;

const Content = styled.div`
  margin-right: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: Ricochet;
  font-weight: bold;
  text-align: left;
`;

const Overview = ({ children }) => (
  <Container>
    <Content>
      {children}
    </Content>
  </Container>
)

export default Overview;