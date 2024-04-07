import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img="https://images.pexels.com/photos/5839957/pexels-photo-5839957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="John Doe" />
        <ReviewCard img="https://images.pexels.com/photos/6001808/pexels-photo-6001808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Jane Doe" />
        <ReviewCard img="https://images.pexels.com/photos/7090879/pexels-photo-7090879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Victoria Zoe" />
      </div>
    </div>
  );
};

export default Review
