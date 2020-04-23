import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

const input = '# This is a header\n\nAnd this is a paragraph';

ReactDOM.render(<ReactMarkdown source={input} />, document.getElementById('container'));
