import base from '@mdx-deck/themes/base';

export default {
  ...base,
  aspectRatio: 16 / 9,
  font: '"Phantom Sans0.5", sans-serif',
  monospace: '"dm", "Dank Mono", monospace',
  colors: {
    text: '#090907',
    background: '#fff',
    link: '#D78F4F'
  },
  css: {
    h1: {
      fontSize: '3em'
    },
    h2: {
      fontSize: '2em',
      fontWeight: '600'
    },
    'h1, h2, h3, h4': {
      marginBlockStart: '0.2em',
      marginBlockEnd: '0.35em'
    }
  }
}