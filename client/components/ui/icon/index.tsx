import { SVGProps } from 'react';
import { IconType } from 'react-icons';

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconType;
}

export const Icon: React.FC<IconProps> = ({ icon: IconComponent, ...props }) => {
  return (
    <IconComponent 
      aria-hidden={'true'} 
      className={'self-center'} 
      {...props} 
    />
  )
};
