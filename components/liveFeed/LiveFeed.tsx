/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import CommentSection from './CommentSection';
import MessageSection from './MessageSection';
import useLiveFeed from './hooks/useLiveFeed';

type Props = {
  className: string;
  ModeratorImage: string;
  img?: string;
  profilePictureClassName: string;
  rectangle?: string;
  image1?: string;
  unsplashIfgrcqhznqg?: string;
};

export const LiveFeed: React.FC<Props> = ({
  className,
  ModeratorImage,
  img = 'image.png',
  profilePictureClassName,
  rectangle = 'rectangle.png',
  image1 = 'image-3.png',
  unsplashIfgrcqhznqg = 'unsplash-ifgrcqhznqg.png',
}) => {
  const { querryPostInfo } = useLiveFeed();

  const sanitizedPosts = (querryPostInfo?.data ?? []).map((post) => ({
    ...post,
    tag_id: post.tag_id ?? null,
  }));

  return (
    <div className='w-[100%] h-[281px]'>
      <MessageSection
        className={className}
        ModeratorImage={ModeratorImage}
        profilePictureClassName={profilePictureClassName}
        image1={image1}
        rectangle={rectangle}
        unsplashIfgrcqhznqg={unsplashIfgrcqhznqg}
        posts={sanitizedPosts}
      />
      <CommentSection
        property1='default'
        refetch={querryPostInfo.refetch}
        frame={'/frame-163422.svg'}
        userPhoto={'/Image-7.png'}
      />
    </div>
  );
};