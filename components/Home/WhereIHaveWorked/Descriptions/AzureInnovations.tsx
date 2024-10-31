import React from 'react';
import ArrowIcon from '../../../Icons/ArrowIcon';
import {getTasksTextWithHighlightedKeyword} from './taskAndType';

export default function TrouveTavoie() {
  const tasks = [
    {
      text: 'I initiated my career as a React Native developer and have actively contributed to the creation of apps, including food delivery, ecommerce and social media.',
      keywords: ['food delivery,', 'ecommerce', 'social media.'],
    },
    {
      text: 'I led a team of five developers for XOX Black, a telecommunications app based in Malaysia, which has amassed over 2 million users on both the App Store and Play Store.',
      keywords: ['XOX Black', '2 million users', 'Malaysia'],
    },
    {
      text: 'My role involved participation in client meetings, project planning, and ensuring the successful delivery of the apps.',
      keywords: [],
    },
  ];

  return (
    <>
      <div className='flex flex-col space-y-5 max-w-xl px-4 md:px-0'>
        <div className='flex flex-col spacey-y-2'>
          {/* Title */}
          <span className='text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide'>
            Senior React Native Developer{' '}
            <span className='text-AAsecondary'>@AzureInnovations</span>
          </span>
          {/* Date */}
          <span className='font-mono text-xs text-gray-500'>Jan - Dec 2022</span>
          <span
            className='font-mono text-xs text-AAsecondary hover:cursor-pointer'
            style={{fontSize: '0.6rem'}}
            // set on click to open the website
            onClick={() => window.open('https://azure-i.com/', '_blank')}
          >
            azure-i.com
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
