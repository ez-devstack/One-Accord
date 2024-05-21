import React from 'react';
import useCurrentActivity from './hooks/useCurrentActivity';

export default function CurrentActivity() {
  const { circumference, offset, activities, currentActivityIndex } = useCurrentActivity();
  return (
    <div className=' items-center gap-[4px] pt-[2px] pb-0 px-0 inline-flex flex-col  flex-[0_0_auto]'>
      <div className='inline-flex items-start gap-[10px] bg-white rounded-[99px] border-2 border-solid border-transparent '>
        <svg
          className='inset-0 rounded-[99px] border-transparent  [background:linear-gradient(180deg,rgb(242,163,116)_0%,rgb(154,191,228)_28.5%,rgb(237,147,133)_52.5%,rgb(241,162,117)_68%,rgb(239,159,123)_78%,rgb(236,136,132)_91%)] '
          width='44'
          height='44'
          viewBox='0 0 48 48'
        >
          <defs>
            <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' style={{ stopColor: 'rgb(242,163,116)', stopOpacity: 1 }} />
              <stop offset='28.5%' style={{ stopColor: 'rgb(154,191,228)', stopOpacity: 1 }} />
              <stop offset='52.5%' style={{ stopColor: 'rgb(237,147,133)', stopOpacity: 1 }} />
              <stop offset='68%' style={{ stopColor: 'rgb(241,162,117)', stopOpacity: 1 }} />
              <stop offset='78%' style={{ stopColor: 'rgb(239,159,123)', stopOpacity: 1 }} />
              <stop offset='91%' style={{ stopColor: 'rgb(236,136,132)', stopOpacity: 1 }} />
            </linearGradient>
            <clipPath id='circleView'>
              <circle cx='24' cy='24' r='22' />
            </clipPath>
          </defs>
          <circle
            cx='24'
            cy='24'
            r='22'
            fill='none'
            stroke='url(#gradient)'
            strokeWidth='3'
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform='rotate(-90 24 24)'
          />
          <image
            href={activities[currentActivityIndex].icon}
            x='2'
            y='2'
            width='44'
            height='44'
            clipPath='url(#circleView)'
            style={{ filter: '#gradient' }}
          />
        </svg>
      </div>
      <div className="relative w-fit [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#ff755e] text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        80k {activities[currentActivityIndex].name}
      </div>
    </div>
  );
}