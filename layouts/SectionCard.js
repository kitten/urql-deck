import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #9EB9D6;
`;

const Content = styled.div`
  font-size: 11vw;
  font-weight: bold;
  transform-origin: center;
  transform: rotate(-20deg) translateY(-5%);
  font-family: Ricochet, serif;
  text-align: center;
`;

const SectionCard = ({ children }) => (
  <Card>
    <Content>
      {children}
    </Content>
  </Card>
);

export default SectionCard;