'use client';

import { useParams } from 'next/navigation';

export default function Course() {
  const { course } = useParams();
  
  return (
    <p>{'This is: ' + course}</p>
  );
}
