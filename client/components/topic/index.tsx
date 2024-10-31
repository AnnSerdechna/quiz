'use client';

import { FC } from 'react';
import Markdown from 'react-markdown'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { fetchTopicBuId } from '@/data/topic';

export const Topic: FC = () => {
  const { topicId } = useParams();
  const { data: topicData, error, isLoading } = useQuery<any, Error>({
    queryKey: ['topic'],
    queryFn: () => fetchTopicBuId(topicId as string),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>; 

  return (
    <div className={'flex flex-col gap-6'}>
      <Markdown>{topicData?.content ?? ''}</Markdown>

      <Link href={`/${topicId}/quiz?question=1`}>Take a quiz</Link>
    </div>
  );
}
