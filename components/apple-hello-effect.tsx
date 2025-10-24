// https://chanhdai.com/components/writing-effect-inspired-by-apple
'use client';

import { cn } from '@lib/utils';
import { type HTMLMotionProps, motion } from 'motion/react';
import React from 'react';

interface AnimationProps {
  pathLength: number;
  opacity: number;
}

interface AppleHelloEffectProps extends Omit<HTMLMotionProps<'svg'>, 'onAnimationComplete'> {
  className?: string;
  speed?: number;
  onAnimationComplete?: () => void;
}

export function AppleHelloVietnameseEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: AppleHelloEffectProps) {
  const calc = (x: number): number => x * speed;

  return (
    <motion.svg
      className={cn('h-20', className)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1009 200'
      fill='none'
      stroke='currentColor'
      strokeWidth='14.8883'
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>xin chào</title>

      {/* x1 */}
      <motion.path
        d='M102.233 96.2277C75.6823 127.245 45.1612 158.759 11.4143 190.521'
        style={{ strokeLinecap: 'round' }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.3),
          ease: 'easeInOut',
          opacity: { duration: 0.15 },
        }}
      />

      {/* x2 */}
      <motion.path
        d='M7.69214 116.575C9.67725 105.16 16.8733 95.7311 28.5358 95.7311C40.4465 95.7311 46.8981 105.408 53.3497 124.019C56.7409 133.283 60.1322 142.547 63.5234 151.81C73.689 179.58 81.1988 191.513 100.855 191.513C128.722 191.513 154.043 159.148 161.595 118.502C162.929 111.321 164.774 103.736 166.043 96.2273'
        style={{ strokeLinecap: 'round' }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.7),
          ease: 'easeInOut',
          delay: calc(0.4),
          opacity: { duration: 0.35, delay: calc(0.4) },
        }}
      />

      {/* i */}
      <motion.path
        d='M166.043 96.2273C163.191 113.101 160.565 126.997 158.92 139.404C157.989 147.592 157.544 154.54 157.596 161.488C157.729 179.354 164.764 191.513 182.695 191.513C209.39 191.513 236.181 159.123 243.73 118.5C245.064 111.321 247.012 103.759 248.139 96.2273'
        style={{ strokeLinecap: 'round' }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.5),
          ease: 'easeOut',
          delay: calc(1),
          opacity: { duration: 0.25, delay: calc(1) },
        }}
      />

      {/* n1 */}
      <motion.path
        d='M248.139 96.2278C243.424 127.741 239.454 158.759 234.491 190.272'
        style={{ strokeLinecap: 'round' }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.3),
          ease: 'easeOut',
          delay: calc(1.5),
          opacity: { duration: 0.15, delay: calc(1.5) },
        }}
      />

      {/* n2 */}
      <motion.path
        d='M237.873 167.951C244.704 121.32 265.508 94.2422 290.322 94.2422C307.692 94.2422 316.625 106.153 315.136 123.026C313.896 135.681 309.677 150.322 308.685 162.729C307.444 179.85 316.499 191.513 330.769 191.513C348.722 191.513 359.309 179.314 364.143 165.965'
        style={{ strokeLinecap: 'round' }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.9),
          ease: 'easeOut',
          delay: calc(1.8),
          opacity: { duration: 0.45, delay: calc(1.8) },
        }}
      />

      {/* c, h1 */}
      <motion.path
        d='M535.91 109.876C531.265 100.446 520.943 93.4984 505.459 93.4984C476.516 93.4984 462.044 117.816 462.044 143.374C462.044 171.503 482.265 192.506 511.307 192.506C559.762 192.506 592.902 136.708 621.581 97.8807C640.764 71.9101 649.874 49.2359 650.372 31.1674C650.62 17.7684 644.168 7.60362 632.01 7.60362C618.61 7.60362 610.173 17.7684 604.963 41.1011C599.255 66.7441 595.037 96.1684 584.367 190.521'
        style={{ strokeLinecap: 'round' }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(1.1),
          ease: 'easeInOut',
          delay: calc(2.6),
          opacity: { duration: 0.55, delay: calc(2.6) },
        }}
      />

      {/* h2 */}
      <motion.path
        d='M585.413 181.299C590.677 135.025 611.663 98.2125 638.213 98.2125C654.094 98.2125 664.187 110.868 661.321 128.982C659.708 139.652 656.794 152.059 655.128 164.217C653.102 179.602 658.89 191.513 676.813 191.513C702.178 191.513 717.375 164.077 725.613 135.196'
        style={{ strokeLinecap: 'round' }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(1),
          ease: 'easeInOut',
          delay: calc(3.6),
          opacity: { duration: 0.5, delay: calc(3.6) },
        }}
      />

      {/* a1 */}
      <motion.path
        d='M803.871 112.995C799.007 101.8 788.666 94.2423 772.207 94.2423C744.912 94.2423 724.398 121.538 723.052 150.818C721.878 177.617 734.244 192.681 751.857 192.505C776.858 192.255 795.234 167.699 803.437 115.742C804.449 109.332 805.498 102.638 806.51 96.2274'
        style={{ strokeLinecap: 'round' }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.8),
          ease: 'easeOut',
          delay: calc(4.6),
          opacity: { duration: 0.4, delay: calc(4.6) },
        }}
      />

      {/* a2, o */}
      <motion.path
        d='M806.51 96.2274C805.486 102.73 804.461 109.232 803.436 115.735C798.955 144.175 796.887 155.395 797.109 162.729C797.628 179.85 803.785 191.513 820.064 191.513C842.563 191.513 860.966 164.721 870.266 138.289C879.653 111.612 891.315 94.9867 915.633 94.9867C935.732 94.9867 951.613 109.875 951.613 137.915C951.613 168.932 931.489 192.257 906.059 192.505C883.681 192.753 868.983 174.639 870.471 147.344C872.208 117.071 890.571 94.9867 914.64 94.9867C928.536 94.9867 940.207 101.164 949.38 107.89C974.247 126.031 993.407 114.82 1000.74 96.8832'
        style={{ strokeLinecap: 'round' }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(1.5),
          ease: 'easeOut',
          delay: calc(5.4),
          opacity: { duration: 0.75, delay: calc(5.4) },
        }}
      />

      {/* sign */}
      <motion.path
        className='stroke-yellow-400'
        d='M763.027 19.3039C768.734 34.6886 780.397 48.3362 792.059 55.5322'
        style={{ strokeLinecap: 'round' }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.8),
          ease: 'easeInOut',
          delay: calc(7),
          opacity: { duration: 0.4, delay: calc(7) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

export function AppleHelloEnglishEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: AppleHelloEffectProps) {
  const calc = (x: number): number => x * speed;

  return (
    <motion.svg
      className={cn('h-20', className)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 638 200'
      fill='none'
      stroke='currentColor'
      strokeWidth='14.8883'
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>hello</title>

      {/* h1 */}
      <motion.path
        d='M8.69214 166.553C36.2393 151.239 61.3409 131.548 89.8191 98.0295C109.203 75.1488 119.625 49.0228 120.122 31.0026C120.37 17.6036 113.836 7.43883 101.759 7.43883C88.3598 7.43883 79.9231 17.6036 74.7122 40.9363C69.005 66.5793 64.7866 96.0036 54.1166 190.356'
        style={{ strokeLinecap: 'round' }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.8),
          ease: 'easeInOut',
          opacity: { duration: 0.4 },
        }}
      />

      {/* h2, ello */}
      <motion.path
        d='M55.1624 181.135C60.6251 133.114 81.4118 98.0479 107.963 98.0479C123.844 98.0479 133.937 110.703 131.071 128.817C129.457 139.487 127.587 150.405 125.408 163.06C122.869 178.941 130.128 191.348 152.122 191.348C184.197 191.348 219.189 173.523 237.097 145.915C243.198 136.509 245.68 128.073 245.928 119.884C246.176 104.996 237.739 93.8296 222.851 93.8296C203.992 93.8296 189.6 115.17 189.6 142.465C189.6 171.745 205.481 192.341 239.208 192.341C285.066 192.341 335.86 137.292 359.199 75.8585C365.788 58.513 368.26 42.4065 368.26 31.1512C368.26 17.8057 364.042 7.55823 352.131 7.55823C340.469 7.55823 332.777 16.6141 325.829 30.9129C317.688 47.4967 311.667 71.4162 309.203 98.4549C303 166.301 316.896 191.348 349.936 191.348C390 191.348 434.542 135.534 457.286 75.6686C463.803 58.513 466.275 42.4065 466.275 31.1512C466.275 17.8057 462.057 7.55823 450.146 7.55823C438.484 7.55823 430.792 16.6141 423.844 30.9129C415.703 47.4967 409.682 71.4162 407.218 98.4549C401.015 166.301 414.911 191.348 444.416 191.348C473.874 191.348 489.877 165.67 499.471 138.402C508.955 111.447 520.618 94.8221 544.935 94.8221C565.035 94.8221 580.916 109.71 580.916 137.75C580.916 168.768 560.792 192.093 535.362 192.341C512.984 192.589 498.285 174.475 499.774 147.179C501.511 116.907 519.873 94.8221 543.943 94.8221C557.839 94.8221 569.51 100.999 578.682 107.725C603.549 125.866 622.709 114.656 630.047 96.7186'
        style={{ strokeLinecap: 'round' }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(2.8),
          ease: 'easeInOut',
          delay: calc(0.7),
          opacity: { duration: 0.7, delay: calc(0.7) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

export function AppleHelloTurkishEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: AppleHelloEffectProps) {
  const calc = (x: number): number => x * speed;

  return (
    <motion.svg
      className={cn('h-20', className)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1050 203'
      fill='none'
      stroke='currentColor'
      strokeWidth='14.8883'
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>merhaba</title>
      <motion.path
        d='M7.44531 133.653C9.82745 116.283 20.5471 98.6651 38.1748 98.6651C55.8026 98.6651 60.8051 115.042 56.2791 136.879C53.1823 152.511 50.8002 168.64 45.7977 193.206'
        stroke='white'
        style={{ strokeLinecap: 'round', strokeOpacity: 1 }}
        strokeWidth='14.8883'
        strokeLinecap='round'
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.8),
          ease: 'easeInOut',
          opacity: { duration: 0.4 },
        }}
      />
      <motion.path
        d='M50.666 167.768C58.4481 124.661 76.5269 97.1763 98.4426 97.1763C116.309 97.1763 123.455 111.32 122.502 130.427C121.549 143.33 117.023 168.64 113.212 193.206'
        stroke='white'
        style={{ stroke: 'white', strokeOpacity: 1 }}
        strokeWidth='14.8883'
        strokeLinecap='round'
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.8),
          ease: 'easeInOut',
          opacity: { duration: 0.4 },
        }}
      />
      <motion.path
        d='M117.406 166.999C124.369 123.792 141.083 97.1764 165.143 97.1764C181.579 97.1764 189.917 111.072 188.011 127.946C186.82 139.856 183.962 154 183.009 165.663C182.056 182.536 187.932 194.447 208.376 194.447C236.302 194.447 276.093 176.604 293.991 149.012C300.091 139.608 302.572 131.171 302.82 122.983C303.068 108.095 294.631 96.9283 279.743 96.9283C260.885 96.9283 246.493 118.268 246.493 145.564C246.493 174.844 262.373 195.439 294.82 195.439C336.405 195.439 365.719 155.401 378.999 95.9357'
        stroke='white'
        style={{ stroke: 'white', strokeOpacity: 1 }}
        strokeWidth='14.8883'
        strokeLinecap='round'
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(1),
          ease: 'easeInOut',
          delay: calc(0.8),
          opacity: { duration: 0.4, delay: calc(0.8) },
        }}
      />
      <motion.path
        d='M377.038 104.362C407.807 105.851 421.43 112.065 421.43 126.705C421.43 136.878 416.467 152.511 414.979 163.926C412.249 183.777 417.956 194.695 438.185 194.695C469.12 194.695 500.135 136.689 527.084 100.205C545.817 74.8435 554.928 52.1693 555.425 34.1008C555.673 20.7018 549.222 10.537 537.063 10.537C523.663 10.537 515.227 20.7018 510.016 44.0345C504.309 69.6774 500.09 99.1018 489.42 193.454'
        stroke='white'
        style={{ stroke: 'white', strokeOpacity: 1 }}
        strokeWidth='14.8883'
        strokeLinecap='round'
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.8),
          ease: 'easeInOut',
          delay: calc(1.8),
          opacity: { duration: 0.4, delay: calc(1.8) },
        }}
      />
      <motion.path
        d='M490.466 184.233C495.73 137.959 516.715 101.147 543.266 101.147C559.147 101.147 569.24 113.802 566.374 131.916C564.761 142.586 561.846 154.993 560.181 167.151C558.155 182.536 563.942 194.447 581.866 194.447C607.231 194.447 622.428 167.011 630.665 138.13'
        stroke='white'
        style={{ stroke: 'white', strokeOpacity: 1 }}
        strokeWidth='14.8883'
        strokeLinecap='round'
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.8),
          ease: 'easeInOut',
          delay: calc(2.6),
          opacity: { duration: 0.4, delay: calc(2.6) },
        }}
      />
      <motion.path
        d='M708.924 115.929C704.059 104.734 693.719 97.1764 677.26 97.1764C649.964 97.1764 629.451 124.472 628.104 153.752C626.931 180.551 639.297 195.616 656.91 195.439C681.91 195.189 700.287 170.633 708.49 118.676C709.502 112.266 710.551 105.572 711.563 99.1615'
        stroke='white'
        style={{ stroke: 'white', strokeOpacity: 1 }}
        strokeWidth='14.8883'
        strokeLinecap='round'
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.8),
          ease: 'easeInOut',
          delay: calc(3.4),
          opacity: { duration: 0.4, delay: calc(3.4) },
        }}
      />
      <motion.path
        d='M711.563 99.1614C710.539 105.664 709.514 112.166 708.49 118.669C704.008 147.109 701.941 158.329 702.163 165.663C702.681 182.784 708.838 194.447 728.448 194.447C762.658 194.447 805.035 128.049 831.97 71.5937C839.163 56.5174 841.765 42.2587 842.517 31.3271C843.267 17.4145 837.559 7.44429 826.393 7.44429C815.227 7.44429 807.783 15.4691 799.594 32.4914C789.917 52.9182 784.21 77.2359 781.232 101.553C773.54 169.4 789.669 194.447 816.716 194.447C839.048 194.447 853.192 174.348 854.929 147.797C855.922 125.464 846.492 108.094 829.619 99.9058'
        stroke='white'
        style={{ stroke: 'white', strokeOpacity: 1 }}
        strokeWidth='14.8883'
        strokeLinecap='round'
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.8),
          ease: 'easeInOut',
          delay: calc(4.2),
          opacity: { duration: 0.4, delay: calc(4.2) },
        }}
      />
      <motion.path
        d='M844.398 111.605C871.346 145.044 909.109 132.872 925.886 113.541'
        stroke='white'
        style={{ stroke: 'white', strokeOpacity: 1 }}
        strokeWidth='14.8883'
        strokeLinecap='round'
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.8),
          ease: 'easeInOut',
          delay: calc(5),
          opacity: { duration: 0.4, delay: calc(5) },
        }}
      />
      <motion.path
        d='M991.059 115.929C986.194 104.734 975.854 97.1764 959.395 97.1764C932.099 97.1764 911.586 124.472 910.239 153.752C909.065 180.551 921.431 195.616 939.045 195.439C964.045 195.189 982.422 170.633 990.625 118.676C991.637 112.266 992.686 105.572 993.698 99.1615'
        stroke='white'
        style={{ stroke: 'white', strokeOpacity: 1 }}
        strokeWidth='14.8883'
        strokeLinecap='round'
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.8),
          ease: 'easeInOut',
          delay: calc(5.8),
          opacity: { duration: 0.4, delay: calc(5.8) },
        }}
      />
      <motion.path
        d='M993.697 99.1614C992.673 105.664 991.648 112.166 990.623 118.669C986.142 147.109 984.074 158.329 984.296 165.663C984.815 182.784 990.972 194.447 1006.36 194.447C1025.71 194.447 1036.57 181.295 1041.78 166.903'
        stroke='white'
        style={{ stroke: 'white', strokeOpacity: 1 }}
        strokeWidth='14.8883'
        strokeLinecap='round'
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: calc(0.8),
          ease: 'easeInOut',
          delay: calc(6),
          opacity: { duration: 0.4, delay: calc(6) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}
