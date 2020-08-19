import {UnControlled as CodeMirror} from 'react-codemirror2'
import React from 'react';
 
<CodeMirror
  value='<h1>I ♥ react-codemirror2</h1>'
  options={{
    mode: '',
    theme: 'material',
    lineNumbers: true
  }}
  onChange={(editor, data, value) => {
  }}
/>
export default CodeMirror;
