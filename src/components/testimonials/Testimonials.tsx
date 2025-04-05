import React from 'react'
import TestimonialSlider from '../image slider/TestimonialSlider'

const Testimonials = () => {
  return (
    <section className="bg-[#FAFAFA] container mx-auto px-6 md:px-12 text-left">
      <h2 className="text-4xl lg:text-5xl font-medium mb-4 mt-16">
        Users Testimonials
      </h2>
      <p className="text-gray-600 text-base md:text-lg mb-8 max-w-3xl">
        Hear from our satisfied clients who have partnered with Arowlex for reliable, eco-friendly waste paper recycling. From offices to households, our commitment to sustainability and service excellence speaks for itself.
      </p>

      <div className="max-w-4xl mx-auto px-4 my-20">
        <TestimonialSlider />
      </div>
    </section>
  )
}

export default Testimonials
