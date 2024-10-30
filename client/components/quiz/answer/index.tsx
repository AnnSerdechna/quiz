import { RadioButton } from '@/components/ui';
import { FC } from 'react';

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