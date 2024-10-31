'use client'

import { FC } from 'react'
import { useQuery } from '@tanstack/react-query';

import { MenuItem } from '@/components';
import { fetchModules } from '@/data/module';

export const Menu: FC = () => {
  const { data: modulesData, error, isLoading } = useQuery<any[], Error>({
    queryKey: ['modules'],
    queryFn: fetchModules, 
  });  

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className={'flex flex-col gap-1'}>
      {modulesData?.map((item) => (
        <div key={item?._id} className={'flex flex-col gap-4'}>
          <p>{item?.name}</p>

          {item?.topics?.map((topic: any) => (
            <MenuItem key={topic?._id} id={topic?._id}  label={topic?.name} />
          ))}
        </div>
      ))}
    </ul>
    
  )
}