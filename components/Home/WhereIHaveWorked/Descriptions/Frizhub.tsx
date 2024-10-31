import React from 'react';
import ArrowIcon from '../../../Icons/ArrowIcon';
import {getTasksTextWithHighlightedKeyword} from './taskAndType';

export default function Frizhub() {
  const tasks = [
    {
      text: 'At Frizhub, I lead a team of six developers working on various apps for Cheezious, a top Pakistani food brand. These apps include Cheezious Rider, Customer, Waiter, Task, and Kiosk.',
      keywords: ['Cheezious Rider, Customer', 'Waiter', 'Task', 'Kiosk'],
    },
    {
      text: 'Responsible for app architecture, project planning, daily scrums, code reviews, and client meetings.',
      keywords: ['daily scrums'],
    },
    {
      text: 'Coordinate with design and product teams to ensure timely deliveries and meet deadlines.',
      keywords: [''],
    },
  ];

  return (
    <>
      <div className='flex flex-col space-y-5 max-w-xl px-4 md:px-0'>
        <div className='flex flex-col spacey-y-2'>
          {/* Title */}
          <span className='text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide'>
            React Native <span className='text-AAsecondary'>@Frizhub</span>
          </span>
          {/* Date */}
          <span className='font-mono text-xs text-gray-500'>Feb 2023 - Present</span>
          <span
            className='font-mono text-xs text-AAsecondary hover:cursor-pointer'
            style={{fontSize: '0.6rem'}}
            // set on click to open the website
            onClick={() => window.open('https://www.frizhub.com/', '_blank')}
          >
            www.frizhub.com
          </span>
        </div>
        <div className='flex flex-col space-y-4 sm:text-sm text-xs'>
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className='flex flex-row space-x-1'>
                <ArrowIcon className={' h-5 w-4 text-AAsecondary flex-none'} />
                <span
                  className='text-gray-500 sm:text-sm text-xs'
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
