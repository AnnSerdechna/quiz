'use client';

import { Fragment } from 'react';
import { useParams } from 'next/navigation';

import { Quiz, CodeEditor } from '@/components';

export default function Course() {
  const { course } = useParams();

  return (
    <Fragment>
      <Quiz />
      {/* <CodeEditor /> */}
    </Fragment>
  );
}
