import im5 from '../assets/github.jpg'
import React from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
const Mirror = props =>{   
    return(
    <div id = "container">
    <div id = "pane-container">
        <section>
        <CodeMirror
            value=""
            options={{
                mode: 'javascript',
                theme:'material',
                lineNumbers: true
            }}
            onChange={(editor, data, value) => {
            }}
        />
        </section>
    </div>
    </div>
   )
}
export default Mirror;
