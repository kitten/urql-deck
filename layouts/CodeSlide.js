import styled from 'styled-components';

const CodeSlide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vh;
  font-size: ${p => (p.scale || 1) * 1}rem;
  width: 100vw;
  height: 100vh;
  background: #011627;
  color: #fff;
`;

export default CodeSlide;