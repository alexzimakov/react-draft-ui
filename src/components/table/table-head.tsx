import { forwardRef, type ComponentPropsWithRef } from 'react';
import { classNames } from '../../shared/react-helpers';

type TableHeadBaseProps = ComponentPropsWithRef<'thead'>;
export type TableHeadProps = {
  isTinted?: boolean;
} & TableHeadBaseProps;

export const TableHead = forwardRef<
  HTMLTableSectionElement,
  TableHeadProps
>(function TableHead({ className, isTinted = false, ...props }, ref) {
  return (
    <thead
      {...props}
      ref={ref}
      className={classNames(className, {
        'dc-table-head': true,
        'dc-table-head_tinted': isTinted,
      })}
    />
  );
});
