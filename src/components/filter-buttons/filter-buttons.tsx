import {
  type ComponentPropsWithoutRef,
  useLayoutEffect,
  useRef,
} from 'react';
import { assertIfNullable } from '../../lib/helpers';
import { classNames } from '../../lib/react-helpers';

type FilterButtonsHTMLProps = ComponentPropsWithoutRef<'div'>;
export type FilterButtonsProps = FilterButtonsHTMLProps;

export function FilterButtons({
  className,
  children,
  ...props
}: FilterButtonsProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    assertIfNullable(el, 'FilterButtons ref was not set');

    for (const child of el.children) {
      if (
        child instanceof HTMLButtonElement &&
        child.dataset.active === 'true'
      ) {
        const offset = el.offsetWidth - child.offsetWidth - child.offsetLeft;
        if (offset < 0) {
          el.scrollTo(Math.abs(offset), 0);
        }
        break;
      }
    }
  }, []);

  return (
    <div
      {...props}
      ref={ref}
      role="group"
      className={classNames(className, 'dc-filter-buttons')}
    >
      {children}
    </div>
  );
}
