import styled from '@emotion/styled'

import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
} from 'styled-system'

const VertCenter = styled('div')(
  {
    display: 'flex',
    width: '100%',
    height: '100%',
    '> *': {
      width: '100vw',
      maxWidth: '100vw',
      maxHeight: '100vh'
    }
  },
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection
)

VertCenter.defaultProps = {
  justifyContent: 'center',
  alignItems: 'stretch',
  flexDirection: 'column',
}

export default VertCenter