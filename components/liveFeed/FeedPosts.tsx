import React, { Suspense } from 'react';
import { LiveFeed } from './LiveFeed';

export default async function FeedPosts() {
  return (
    <>
      <div className='container mx-auto px-4'>
        <Suspense fallback={'loading..'}>
          <LiveFeed
            className='!h-[353.39px]'
            ModeratorImage='/moderator-image.png'
            image1='/image-3-2.png'
            img='image-7-3.png'
            profilePictureClassName='bg-[url(/profile-pic.png)]'
            rectangle='/rectangle.png'
            unsplashIfgrcqhznqg='/unsplash-iFgRcqHznqg.png'
          />
        </Suspense>
      </div>
    </>
  );
}