import { ComponentPropsWithoutRef } from 'react';
import { classNames } from '../../lib/react-helpers';

export interface ButtonsGroupProps extends ComponentPropsWithoutRef<'div'> {}

export function ButtonsGroup({ className, ...props }: ButtonsGroupProps) {
  return (
    <div {...props} className={classNames(className, 'dc-buttons-group')} />
  );
}
