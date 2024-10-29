import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export const Row: FC<PropsWithChildren<{ className : string }>> = ({ className, children }) => (
    <div 
    className={clsx(`
        flex 
        gap-1 
        content-center
        px-4 
        py-2 
        rounded-md 
      `, className)}
    >
      {children}
    </div>
)