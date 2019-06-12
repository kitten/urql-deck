import styled from 'styled-components';

const VertCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  width: 100%;
  height: 100%;
  background: ${p => p.secondary ? '#9EB9D6' : 'inherit'};

  & > * {
    width: 100vw;
    max-width: 100vw;
    max-height: 100vh;
  }
`;

export default VertCenter