import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button: FC<ButtonProps> = ({ text, ...props }) => (
  <button 
    className={'px-4 py-1 bg-slate-50 rounded-md cursor-pointer  disabled:cursor-not-allowed'}
    {...props}
  > 
    {text}
  </button>
)