import { forwardRef, type ComponentPropsWithRef } from 'react';
import { classNames } from '../../lib/react-helpers';

export type CaptionAppearance =
  | 'default'
  | 'info'
  | 'success'
  | 'error'
  | 'warning';
export type CaptionProps = ComponentPropsWithRef<'p'> & {
  appearance?: CaptionAppearance;
  showIcon?: boolean;
};

export const Caption = forwardRef<HTMLParagraphElement, CaptionProps>(
  function Caption({
    appearance = 'default',
    showIcon = false,
    className = '',
    children,
  }, ref) {
    let icon: JSX.Element | null = null;
    if (showIcon) {
      if (appearance === 'default' || appearance === 'info') {
        icon = infoIcon;
      } else if (appearance === 'success') {
        icon = successIcon;
      } else if (appearance === 'error') {
        icon = errorIcon;
      } else if (appearance === 'warning') {
        icon = warningIcon;
      }
    }

    return (
      <p ref={ref} className={classNames(className, 'dc-caption', {
        [`dc-caption_appearance_${appearance}`]: appearance !== undefined,
      })}>
        {icon}
        {children}
      </p>
    );
  }
);
const infoIcon = (
  <svg
    className="dc-caption__icon"
    data-testid="caption-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="20"
    height="20"
  >
    <path
      fill="currentColor"
      d="M10 3C6.13425 3 3 6.13425 3 10C3 13.8657 6.13425 17 10 17C13.8657 17 17 13.8657 17 10C17 6.13425 13.8657 3 10 3ZM10.2631 12.7492C10.3698 12.7364 10.5361 12.7131 10.7863 12.6472C10.8454 12.6334 10.9075 12.6392 10.9629 12.6638C11.0184 12.6885 11.0644 12.7305 11.0937 12.7837C11.1252 12.8386 11.1395 12.9017 11.1351 12.9648C11.1306 13.0279 11.1075 13.0883 11.0687 13.1383C10.4241 13.9031 9.71592 14.2082 8.95875 14.0378C8.59417 13.9556 8.42267 13.7462 8.3445 13.5887C8.19283 13.2801 8.22317 12.8712 8.44075 12.3339C8.44075 12.3339 9.17283 10.532 9.2615 10.3202C9.29358 10.2479 9.25917 10.161 9.15358 10.168C8.97693 10.1893 8.80205 10.2234 8.63033 10.2701C8.57121 10.2842 8.50909 10.2785 8.45354 10.2538C8.39799 10.2292 8.35209 10.1869 8.32292 10.1336C8.29151 10.0786 8.27713 10.0156 8.2816 9.95244C8.28606 9.8893 8.30917 9.82891 8.348 9.77892C8.99258 9.01417 9.70075 8.70908 10.4579 8.87942C10.8225 8.96108 10.994 9.17108 11.0722 9.32858C11.2238 9.63717 11.1935 10.0461 10.9759 10.5833C10.9759 10.5833 10.2438 12.3852 10.1552 12.597C10.1231 12.6687 10.1581 12.7562 10.2631 12.7492V12.7492ZM12.3182 7.326C12.2535 7.62844 12.0715 7.89287 11.8121 8.06128C11.5527 8.22969 11.2371 8.28833 10.9345 8.22433C10.632 8.15965 10.3676 7.97767 10.1991 7.71829C10.0305 7.45892 9.97176 7.14331 10.0356 6.84067C10.107 6.54518 10.2909 6.28921 10.5481 6.1272C10.8053 5.96518 11.1156 5.90991 11.4129 5.97313C11.7103 6.03635 11.9712 6.21309 12.1403 6.46574C12.3093 6.71839 12.3732 7.02702 12.3182 7.326V7.326Z"
    />
  </svg>
);

const successIcon = (
  <svg
    className="dc-caption__icon"
    data-testid="caption-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="20"
    height="20"
  >
    <path
      fill="currentColor"
      d="M12.828 7.97583L9.91133 12.6425C9.86481 12.7169 9.8021 12.7799 9.72787 12.8268C9.65364 12.8737 9.5698 12.9032 9.48259 12.9132C9.46069 12.9155 9.43869 12.9166 9.41667 12.9167C9.34006 12.9167 9.26418 12.9017 9.19341 12.8724C9.12263 12.843 9.05835 12.8 9.00425 12.7457L7.25425 10.9957C7.14799 10.8857 7.0892 10.7384 7.09053 10.5854C7.09186 10.4325 7.1532 10.2862 7.26136 10.178C7.36951 10.0699 7.51582 10.0085 7.66877 10.0072C7.82172 10.0059 7.96907 10.0647 8.07909 10.1709L9.3105 11.4023L11.8387 7.3575C11.9207 7.22631 12.0514 7.13306 12.2022 7.09827C12.3529 7.06348 12.5113 7.09 12.6425 7.172C12.7737 7.254 12.8669 7.38475 12.9017 7.5355C12.9365 7.68625 12.91 7.84464 12.828 7.97583M10 3C8.61553 3 7.26215 3.41054 6.11101 4.17971C4.95987 4.94888 4.06266 6.04213 3.53285 7.32121C3.00303 8.6003 2.86441 10.0078 3.13451 11.3656C3.4046 12.7235 4.07129 13.9708 5.05026 14.9497C6.02922 15.9287 7.2765 16.5954 8.63437 16.8655C9.99224 17.1356 11.3997 16.997 12.6788 16.4672C13.9579 15.9373 15.0511 15.0401 15.8203 13.889C16.5895 12.7378 17 11.3845 17 10C17 8.14348 16.2625 6.36301 14.9497 5.05025C13.637 3.7375 11.8565 3 10 3"
    />
  </svg>
);

const errorIcon = (
  <svg
    className="dc-caption__icon"
    data-testid="caption-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="20"
    height="20"
  >
    <path
      fill="currentColor"
      d="M10 14.0833C9.82694 14.0833 9.65777 14.032 9.51388 13.9359C9.36999 13.8397 9.25783 13.7031 9.19161 13.5432C9.12538 13.3833 9.10805 13.2074 9.14181 13.0376C9.17558 12.8679 9.25891 12.712 9.38128 12.5896C9.50365 12.4672 9.65956 12.3839 9.8293 12.3501C9.99903 12.3164 10.175 12.3337 10.3348 12.3999C10.4947 12.4662 10.6314 12.5783 10.7275 12.7222C10.8237 12.8661 10.875 13.0353 10.875 13.2083C10.8747 13.4403 10.7824 13.6627 10.6184 13.8267C10.4544 13.9907 10.232 14.083 10 14.0833M9.384 6.17742C9.54824 6.01568 9.7695 5.92502 10 5.92502C10.2305 5.92502 10.4518 6.01568 10.616 6.17742C10.6961 6.25973 10.7588 6.35742 10.8002 6.46458C10.8416 6.57175 10.8609 6.68618 10.8569 6.801L10.7344 10.7426C10.7309 10.8563 10.6833 10.9641 10.6016 11.0433C10.52 11.1225 10.4107 11.1667 10.2969 11.1667H9.70367C9.59017 11.1669 9.48105 11.1229 9.39939 11.0441C9.31774 10.9653 9.26996 10.8578 9.26617 10.7443L9.14309 6.80042C9.13919 6.6857 9.15852 6.57137 9.19992 6.46431C9.24132 6.35725 9.30393 6.25967 9.384 6.17742M10 3C8.61553 3 7.26215 3.41054 6.11101 4.17971C4.95987 4.94888 4.06266 6.04213 3.53285 7.32121C3.00303 8.6003 2.86441 10.0078 3.13451 11.3656C3.4046 12.7235 4.07129 13.9708 5.05026 14.9497C6.02922 15.9287 7.2765 16.5954 8.63437 16.8655C9.99224 17.1356 11.3997 16.997 12.6788 16.4672C13.9579 15.9373 15.0511 15.0401 15.8203 13.889C16.5895 12.7378 17 11.3845 17 10C17 8.14348 16.2625 6.36301 14.9497 5.05025C13.637 3.7375 11.8565 3 10 3"
    />
  </svg>
);

const warningIcon = (
  <svg
    className="dc-caption__icon"
    data-testid="caption-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="20"
    height="20"
  >
    <path
      fill="currentColor"
      d="M9.99999 14.4617C9.8681 14.4617 9.73919 14.4243 9.62953 14.3544C9.51988 14.2845 9.43441 14.1851 9.38394 14.0688C9.33347 13.9526 9.32027 13.8246 9.346 13.7012C9.37173 13.5777 9.43523 13.4644 9.52849 13.3754C9.62174 13.2864 9.74055 13.2258 9.8699 13.2012C9.99925 13.1767 10.1333 13.1893 10.2552 13.2374C10.377 13.2856 10.4811 13.3672 10.5544 13.4718C10.6277 13.5764 10.6668 13.6995 10.6668 13.8253C10.6664 13.994 10.5961 14.1556 10.4711 14.2749C10.3461 14.3942 10.1767 14.4613 9.99999 14.4617M9.52122 8.28223C9.64998 8.16431 9.82153 8.09847 9.99999 8.09847C10.1784 8.09847 10.35 8.16431 10.4787 8.28223C10.5409 8.34158 10.5897 8.41246 10.622 8.49049C10.6544 8.56853 10.6696 8.65206 10.6668 8.73593L10.5708 11.6077C10.5673 11.6913 10.5298 11.7702 10.4663 11.8279C10.4029 11.8855 10.3183 11.9172 10.2307 11.9163H9.76927C9.68192 11.9171 9.59768 11.8855 9.53425 11.8281C9.47083 11.7708 9.43317 11.6923 9.4292 11.609L9.33318 8.73593C9.33038 8.65206 9.34562 8.56853 9.37796 8.49049C9.4103 8.41246 9.45906 8.34158 9.52122 8.28223M17.8362 15.1171L11.1082 3.62045C10.998 3.43231 10.8372 3.27563 10.6424 3.16656C10.4476 3.0575 10.2258 3 9.99999 3C9.77413 3 9.55236 3.0575 9.35756 3.16656C9.16275 3.27563 9.00196 3.43231 8.89176 3.62045L2.16374 15.1171L2.16241 15.1203C2.05169 15.3142 1.9958 15.5322 2.00025 15.753C2.00469 15.9738 2.06931 16.1897 2.18774 16.3794C2.30618 16.5691 2.47434 16.7261 2.67568 16.8349C2.87702 16.9437 3.10459 17.0006 3.33598 17H16.6653C16.8969 17.0003 17.1245 16.943 17.3258 16.8338C17.5272 16.7246 17.6952 16.5672 17.8133 16.3771C17.9315 16.1871 17.9958 15.971 17.9998 15.75C18.0038 15.5291 17.9474 15.3109 17.8362 15.1171"
    />
  </svg>
);
