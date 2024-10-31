'use client';

import { FC, useState } from 'react';

import { Button, Title } from '@/components/ui';
import { Answer } from '@/components';
import { quizeData } from './data';

export const Quiz: FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [questionIdx, setQuestionIdx] = useState<number>(0);

  const currentQuestion = quizeData[questionIdx];
  const currentQuestionId = currentQuestion?.id;

  const handleAnswerChange = (answerId: string) => {
    setSelectedAnswers(prev => ({ ...prev, [currentQuestionId]: answerId }));
  };

  const onPrev = () => setQuestionIdx(prev => Math.max(prev - 1, 0));
  const onNext = () => setQuestionIdx(prev => Math.min(prev + 1, quizeData.length - 1));

  return (
    <div className={'flex items-center justify-center h-full'}>
      <div className={'flex flex-col gap-6 w-2/3 '}>
        <Title level={3} className={'mb-10 text-center'}>{currentQuestion?.questionText}</Title>

        <ol className='grid md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-4'>
          {currentQuestion?.answers.map((answer) => {
            const isChecked = selectedAnswers[currentQuestionId] === answer.id;
            const answerType = isChecked
              ? answer.isCorrect
                ? 'correct'
                : 'wrong'
              : '';

            return (
              <Answer
                key={answer.id}
                id={answer.id}
                value={answer.id}
                text={answer.answerText}
                type={answerType}
                checked={isChecked}
                onChange={() => handleAnswerChange(answer.id)}
              />
            );
          })}
        </ol>

        {/* <div className={'flex flex-col gap-2'}>
        <Row className={'bg-emerald-200'}>
          <Icon icon={FaRegCheckCircle} />
          <p>Some content here</p>
        </Row>

        <Row className={'bg-red-200'}>
          <Icon icon={CgCloseO} />
          <p>Some content here</p>
        </Row>
      </div> */}

        <div className={'flex justify-end'}>
          <p>{`${questionIdx + 1} / ${quizeData.length}`}</p>
        </div>

        <div className={'flex justify-between'}>
          <Button
            text={'Prev'}
            disabled={questionIdx === 0}
            onClick={onPrev}
          />
          <Button
            text={'Next'}
            disabled={questionIdx === quizeData.length - 1}
            onClick={onNext}
          />
        </div>
      </div>
    </div>
  );
};