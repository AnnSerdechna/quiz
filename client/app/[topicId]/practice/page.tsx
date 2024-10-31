'use client';

import { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';

import { ContentContainer } from '@/components';

export default function Practice() {
  const [value, setValue] = useState("const http = require('http');\n\n const server = http.createServer((req, res) => {\n\tres.statusCode = 200;\n\tres.setHeader('Content-Type', 'text/plain');\n\tres.end('Hello, World!');\n});");

  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  return (
    <ContentContainer>
      <CodeMirror
        value={value}
        width={'500px'}
        height={'300px'}
        theme={dracula}
        extensions={[javascript()]}
        onChange={onChange}
      />
    </ContentContainer>
  );
}