import Link from 'next/link';
import { FC, ReactNode } from 'react'

export interface MenuItemProps {
  id: string
  label: string
  icon?: ReactNode
}

export const MenuItem: FC<MenuItemProps> = ({id, label}) => {
  return (
    <li>
      <Link
        href={`/${id}`}
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
        {/* {props.icon} */}
        <span>{label}</span>
      </Link>
    </li>
  )
}