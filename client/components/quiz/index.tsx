import { FC } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";

import { Row, Icon, Button } from '@/components/ui';

type AnswerProps = {
  index: string
  text: string
  type?: 'correct' | 'wrong'
}

const Answer: FC<AnswerProps> = ({ index , text, type }) => (
  <li 
    className={`
      w-96
      px-4 
      py-2 
      ${type === 'correct' 
        ? 'bg-emerald-200' 
        : type === 'wrong' 
        ? 'bg-red-200' 
          : 'bg-slate-200'
      }
      rounded-md 
      cursor-pointer
    `}
  >
    {`${index}. ${text}`}
  </li>
)

export const Quiz: FC = () => {
  return (
    <div className={'flex flex-col gap-10'}>
      <p className={'text-center'}>Question?</p>

      <ol className={'grid grid-rows-2 grid-flow-col gap-4'}>
        <Answer 
          index={'A'} 
          type={'wrong'}
          text={'What is it? What is it? What is it? What is it? What is it?'} 
        />
        <Answer
          index={'B'}
          text={'What is it? '}
        />
        <Answer
          type={'correct'}
          index={'C'}
          text={'What is it? '}
        />
        <Answer
          index={'D'}
          text={'What is it? '}
        />
      </ol>

      <div className={'flex flex-col gap-2'}>
        <Row className={'bg-emerald-200'}>
          <Icon icon={FaRegCheckCircle} />
          <p>Some content here</p>
        </Row>

        <Row className={'bg-red-200'}>
          <Icon icon={CgCloseO} />
          <p>Some content here</p>
        </Row>
      </div>

      <div className={'flex content-center justify-between'}>
        <Button text={'Prev'} />
        <Button text={'Next'} />
      </div>
    </div>
  )
}