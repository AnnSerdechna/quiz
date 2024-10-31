'use client';

import { useCallback } from 'react';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useSessionStorage } from 'react-use';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui';
import { ContentContainer, QuizAnswer } from '@/components';
import { fetchTopicBuId } from '@/data/topic';

export default function Quiz() {
  const { topicId } = useParams();
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams();
  const [selectedAnswers, setSelectedAnswers] = useSessionStorage<Record<string, any>>(`${topicId}`, {});
  const { data: topicData, error, isLoading } = useQuery<any, Error>({
    queryKey: ['topic'],
    queryFn: () => fetchTopicBuId(topicId as string),
  });

  const questionParams = searchParams.get('question') ?? '';
  const questionCount = Number(questionParams);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const currentQuestion = !!topicData?.quiz && topicData?.quiz[questionCount - 1];
  const currentQuestionId: string = currentQuestion?._id;

  const handleAnswerChange = (answerId: string) => {
    setSelectedAnswers((prev: Record<string, string>) => ({ ...prev, [currentQuestionId]: answerId }));
  };

  const onPrev = () => {
    const backPath = `${pathname}?${createQueryString('question', `${questionCount - 1}`)}`
    router.push(backPath)
  };
  const onNext = () => {
    const nextPath = `${pathname}?${createQueryString('question', `${questionCount + 1}`)}`
    router.push(nextPath)
  }

  const onClearResult = () => {
    setSelectedAnswers({});
    router.push(`${pathname}?${createQueryString('question', '1')}`)
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ContentContainer title={currentQuestion?.questionText}>
      <ol className='grid md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-4'>
        {!!currentQuestion && currentQuestion?.answers.map((answer: any) => {
          const isChecked = selectedAnswers[currentQuestionId] === answer?._id;
          const answerType = isChecked
            ? answer.isCorrect
              ? 'correct'
              : 'wrong'
            : '';

          return (
            <QuizAnswer
              key={answer?._id}
              id={answer?._id}
              value={answer?._id}
              text={answer?.answerText}
              type={answerType}
              checked={isChecked}
              onChange={() => handleAnswerChange(answer?._id)}
            />
          );
        })}
      </ol>

      <div className={'flex justify-end'}>
        <p>{`${questionCount} / ${topicData?.quiz?.length}`}</p>
      </div>

      <div className={'flex justify-between'}>
        <Button
          text={'Prev'}
          disabled={questionCount === 1}
          onClick={onPrev}
        />
        <Button
          text={'Next'}
          disabled={questionCount === topicData?.quiz?.length}
          onClick={onNext}
        />
      </div>

      <div className={'flex justify-end'}>
        <Button
          text={'Clear'}
          onClick={onClearResult}
        />
      </div>
    </ContentContainer>
  );
}
