import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { classNames } from '../../shared/react-helpers';

export type AlertAppearance =
  | 'default'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';
export type AlertVariant =
  | 'default'
  | 'full-width'
  | 'accent-border'
export type AlertProps = {
  icon?: JSX.Element | null;
  heading?: ReactNode;
  variant?: AlertVariant;
  appearance?: AlertAppearance;
} & ComponentPropsWithoutRef<'section'>;

export function Alert({
  icon = null,
  heading = null,
  variant = 'default',
  appearance = 'default',
  className,
  children,
  ...props
}: AlertProps) {
  const shouldShowIcon = Boolean(icon);
  const shouldRenderHeading = Boolean(heading);

  return (
    <section
      {...props}
      className={classNames(className, {
        'dc-alert': true,
        'dc-alert_has_icon': shouldShowIcon,
        [`dc-alert_variant_${variant}`]: variant,
        [`dc-alert_appearance_${appearance}`]: appearance,
      })}
    >
      {shouldShowIcon && <div className="dc-alert__icon">{icon}</div>}
      <div className="dc-alert__body">
        {shouldRenderHeading && <h1 className="dc-alert__title">{heading}</h1>}
        {children}
      </div>
    </section>
  );
}
