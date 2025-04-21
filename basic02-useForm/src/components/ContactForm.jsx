import React from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import { MdMessage, MdCall, MdEmail } from 'react-icons/md';
import img from '../assets/service-24-7-pana-1.svg';

function ContactForm() {
  // Set up useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Callbacks for buttons
  const callUs = () => {
    alert('Calling...');
  };

  const emailUs = () => {
    alert('Emailing...');
  };

  const chatUs = () => {
    alert('Chatting...');
  };

  // Form submission
  const onSubmit = (data) => {
    alert('Form submitted with data: ' + JSON.stringify(data));
  };

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-20 flex justify-center items-center">
      <div className="max-w-xl mx-auto w-full">
        {/* Buttons */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex gap-4">
            <Button
              onClick={chatUs}
              text="Support Chat"
              icon={<MdMessage />}
              css="flex-1 bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800 transition-all"
            />
            <Button
              onClick={callUs}
              text="Call Us"
              icon={<MdCall />}
              css="flex-1 bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800 transition-all"
            />
          </div>
          <Button
            onClick={emailUs}
            text="Email Us"
            icon={<MdEmail />}
            css="w-full bg-white text-black border border-gray-400 px-4 py-3 rounded-md hover:bg-gray-200 transition-all"
          />
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <button type="submit" className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
            Send Message
          </button>
        </form>
      </div>
      <div>
        <img src={img} alt="contact image" />
      </div>
    </section>
  );
}

export default ContactForm;
