import { FC, ReactNode } from 'react';

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5; 
  children: ReactNode; 
  className?: string; 
}

const classMap = {
  1: 'text-4xl', 
  2: 'text-3xl', 
  3: 'text-xl',  
  4: 'text-lg',  
  5: 'text-base', 
};

export const Title: FC<TitleProps> = ({ level = 1, children, className, ...props }) => {
  const Tag = `h${Math.max(1, Math.min(6, level))}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${classMap[level]} font-bold ${className}`} {...props}>
      {children}
    </Tag>
  );
};
