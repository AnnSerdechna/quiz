'use client';

import Markdown from 'react-markdown'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { fetchTopicBuId } from '@/data/topic';
import { ContentContainer } from '@/components';

export default function TopicContent() {
  const { topicId } = useParams();
  const { data: topicData, error, isLoading } = useQuery<any, Error>({
    queryKey: ['topic'],
    queryFn: () => fetchTopicBuId(topicId as string),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ContentContainer>
      <Markdown>{topicData?.content ?? ''}</Markdown>

      <Link href={`/${topicId}/quiz?question=1`}>quiz</Link>

      <Link href={`/${topicId}/practice`}>practice</Link>
    </ContentContainer>
  );
}
