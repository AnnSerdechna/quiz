import { FC, ReactNode } from 'react';
import { Title } from '@/components/ui';

type ContentContainerProps = {
  title?: string
  children: ReactNode
};

export const ContentContainer: FC<ContentContainerProps> = ({ title, children  }) => (
  <div className={'flex items-center justify-center'}>
    <div className={'flex flex-col gap-6 w-2/3 '}>
      {!!title && <Title level={3} className={'mb-10 text-center'}>{title}</Title>}
      {children}
    </div>
  </div>
)