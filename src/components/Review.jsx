import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  return (

    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5 -mt-2">
       <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
         Customer's Review
      </h1>

    <div className="flex flex-col md:flex-row gap-5 mt-5">
      <ReviewCard
        img="https://images.pexels.com/photos/5839957/pexels-photo-5839957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="John Doe"
        review="ExpressEats exceeded my expectations! The food was delicious and the delivery was fast. I'll definitely be ordering again."
      />

      <ReviewCard
        img="https://images.pexels.com/photos/6001808/pexels-photo-6001808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Jane Smith"
        review="I'm impressed by the quality of food and service provided by ExpressEats. The flavors were amazing, and the portion sizes were generous. Highly recommended!"
      />

      <ReviewCard
        img="https://images.pexels.com/photos/7090879/pexels-photo-7090879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Victoria Johnson"
        review="ExpressEats never disappoints! Their diverse menu options cater to all tastes, and their customer service is top-notch. I'm a loyal customer!"
      />
    </div>
    </div>
  );
};

export default Reviews;
