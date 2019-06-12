import base from '@mdx-deck/themes/base';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/nightOwl';

const getLanguage = className => {
  const match = /language-(\w*)/.exec(className || 'language-javascript')
  let lang = 'javascript'
  if (match.length > 1) {
    lang = match[1]
  }
  return lang
}

const pre = props => props.children

const code = props => {
  const language = getLanguage(props.className)
  const code = props.children.trim();

  return (
    <Highlight
      {...defaultProps}
      theme={prismTheme}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

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
  components: {
    ...base.components,
    pre,
    code
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