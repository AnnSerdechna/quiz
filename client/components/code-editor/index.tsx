'use client';

import { FC, useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';

export const CodeEditor: FC = () => {
  const [value, setValue] = useState("console.log('hello world!');");

  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  return (
    <CodeMirror
      value={value}
      width={'500px'}
      height={'300px'}
      theme={dracula}
      extensions={[javascript()]}
      onChange={onChange}
    />
  );
}