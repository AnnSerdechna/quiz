import { FC, ReactNode } from 'react'
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import { Icon } from '@/components/ui';
import { MenuItem, MenuItemProps } from '@/components';

const menuItems: MenuItemProps[] = [
  {
    path: 'node',
    label: 'Node JS',
    icon: <Icon icon={FaNodeJs} />,
  },
  {
    path: 'js',
    label: 'JavaScript',
    icon: <Icon icon={IoLogoJavascript} />,
  },
]

export const Menu: FC = () => {
  return (
    <ul className={'flex flex-col gap-1'}>
      {menuItems.map((props) => (
        <MenuItem key={props.path} props={props} />
      ))}
    </ul>
  )
}