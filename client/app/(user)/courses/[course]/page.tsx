'use client';

import { Fragment, useState } from 'react';
import { useParams } from 'next/navigation';

import { Quiz, CodeEditor } from '@/components';

export default function Course() {
  const { course } = useParams();

  return (
    <Fragment>
      <p>{course}</p>
      <Quiz />
      {/* <CodeEditor /> */}
    </Fragment>
  );
}
