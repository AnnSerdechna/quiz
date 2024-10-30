import { FC } from 'react';

import { RadioButton } from '@/components/ui';

type AnswerProps = {
  id: string
  text: string
  checked: boolean
  type?: 'correct' | 'wrong' | ''
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Answer: FC<AnswerProps> = ({ id, text, type, value, checked, onChange }) => {
  const labelStyles = `
    flex
    content-center
    gap-2
    w-full
    px-4
    py-2
    border
    ${type === 'correct'
      ? 'border-emerald-400'
      : type === 'wrong'
        ? 'border-red-400'
        : 'border-zinc-200'
    }
    rounded-md 
    cursor-pointer
  `;

  return (
    <li>
      <RadioButton 
        htmlFor={id} 
        id={id}
        name={'radioGroup'}
        value={value}
        checked={checked}
        labelText={text}
        labelClassName={labelStyles}
        onChange={onChange}
      />
    </li>
  )
}