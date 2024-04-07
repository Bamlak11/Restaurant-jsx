import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img className=' rounded-3xl mb-8 lg:mb-0 lg:mr-8' src="https://images.pexels.com/photos/5638730/pexels-photo-5638730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Image" width={700} />

      <div className='space-y-4 lg:pt-14'>
        <h1 className=" font-semibold text-4xl text-center md:text-start">Why ExpressEats?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          architecto quisquam delectus minima perferendis nulla quia nisi
          laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
          molestias omnis reprehenderit quae animi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
          suscipit reiciendis accusamus recusandae eum aspernatur pariatur odit
          veritatis facere. Magnam!
        </p>
        <div className=" flex justify-center lg:justify-start">
            <Button title="Learn More"/>
        </div>
      </div>
    </div>

  )
}

export default About
