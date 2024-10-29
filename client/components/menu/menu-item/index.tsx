import Link from 'next/link';
import { FC, ReactNode } from 'react'

export interface MenuItemProps {
  path: string
  label: string
  icon: ReactNode
}

export const MenuItem: FC<{ props: MenuItemProps }> = ({props}) => {
  return (
    <li>
      <Link
        href={`/courses/${props.path}`}
        className={`
          flex 
          content-center 
          gap-2 
          px-2
          py-2
          text-sm
          rounded-md
        hover:bg-zinc-100 
          transition-all 
          ease-in-out 
          delay-150
        `}
      >
        {props.icon}
        <span>{props.label}</span>
      </Link>
    </li>
  )
}