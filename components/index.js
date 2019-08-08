import styled from 'styled-components';

export const CenterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.div.attrs(p => ({
  style: {
    backgroundImage: `url('${p.src}')`
  }
}))`
  width: ${p => p.smol ? '8vw' : '10vw'};
  height: ${p => p.smol ? '8vw' : '10vw'};
  margin: 2vw;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;
