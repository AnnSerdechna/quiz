import { FC, InputHTMLAttributes } from 'react';

import './index.css';

type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  htmlFor: string 
  labelClassName: string
  labelText: string
}

export const RadioButton: FC<RadioButtonProps> = ({ htmlFor, labelClassName, labelText, ...props }) => (
  <label
    htmlFor={htmlFor}
    className={labelClassName}
  >
    <input
      type={'radio'}
      className={'radio-btn'}
      {...props}
    />
    <span className={'checkmark'}></span>
    {labelText}
  </label>
)