import { ComponentPropsWithRef, ComponentPropsWithoutRef, JSX, forwardRef } from 'react';
import { classNames } from '../../lib/react-helpers';

type RadioHTMLProps = ComponentPropsWithRef<'input'>;
type RadioBaseProps = Omit<RadioHTMLProps, 'type'>;
export type RadioIcon = 'dot' | 'check';
export type RadioToggleHandler = (checked: boolean) => void;
export type RadioProps = RadioBaseProps & {
  icon?: RadioIcon;
  onToggle?: RadioToggleHandler;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio({
  icon = 'dot',
  style,
  className,
  onChange,
  onToggle,
  ...props
}, ref) {
  let iconElement: JSX.Element;
  switch (icon) {
    case 'check':
      iconElement = <CheckIcon className="dc-radio__icon" data-testid="radio-check-icon" />;
      break;
    default:
      iconElement = <DotIcon className="dc-radio__icon" data-testid="radio-dot-icon" />;
  }

  return (
    <label style={style} className={classNames('dc-radio', className)}>
      <input
        {...props}
        ref={ref}
        type="radio"
        className="dc-radio__input"
        onChange={(event) => {
          onChange?.(event);
          onToggle?.(event.target.checked);
        }}
      />
      <span
        className="dc-radio__check"
        data-testid="radio-check"
        aria-hidden={true}
      >
        {iconElement}
      </span>
    </label>
  );
});

function CheckIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={20}
      height={20}
      {...props}
    >
      <path
        d="M5 10.4444L9 14L15 6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DotIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={20}
      height={20}
      {...props}
    >
      <circle
        cx={10}
        cy={10}
        r={4}
        fill="currentColor"
      />
    </svg>
  );
}
