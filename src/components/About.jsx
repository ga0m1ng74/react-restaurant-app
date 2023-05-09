import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import pasta from '../assets/pasta.png'
import chef from '../assets/chef.jpeg'
function About() {
  return (
    <div className="section" id='about'>
      <div className=" grid md:grid-cols-2 items-center mb-10">
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="sm:text-3xl text-xl font-bold mb-6">Best Food in town awaits you</div>
          <p className='text-sm opacity-50'>
            If you're looking for the best food in town, you're in luck! With so many amazing restaurants and food options available, you're sure to find something that suits your taste buds and satisfies your cravings. Whether you're in the mood for classic comfort food, international cuisine, or trendy new dishes, there are plenty of options to choose from.
            To start your search for the best food in town, consider asking locals for recommendations or checking out online reviews to see what other din can also explore different neighborhoods and food districts to get a sense of the variety of options available.
            Ultimately, the best food in town is subjective and depends on your personal preferences. Don't be afraid to try new things and explore different restaurants to find your new favorite dish. With so many amazing options, you're sure to discover something delicious that you'll want to keep coming back for.
          </p>
          <div className="btn">
            <a href="#" className=' text-white text-[0.85rem]'>Explore More</a>
            <FaArrowRight className=' text-white' />
          </div>
        </div>
        <div className="md:row-start-1">
          <img src={pasta} alt="pasta-img" />
        </div>
      </div>
      <div className="grid  md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="sm:text-3xl text-xl font-bold mb-6">
            Our team of registered nurses and skilled healthcare professionals
            provide in-home nursing.
          </div>
          <p className='text-sm opacity-50'>
            If you are considering in-home nursing for yourself or a loved one, we encourage you to contact us to learn more about our services. We would be happy to answer any questions you may have and help you determine if in-home nursing is the right choice for your situation.
          </p>
        </div>
        <div className="">
          <img src={chef} alt="chef-img" />
        </div>
      </div>
    </div>
  )
}

export default About