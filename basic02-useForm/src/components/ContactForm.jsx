import React from 'react';
import Button from './Button';
import { MdMessage, MdCall, MdEmail } from 'react-icons/md';
import img from '../assets/service-24-7-pana-1.svg'

function ContactForm() {

    const callUs = () => {
        alert('Calling...')
    }

    const emailUs = () => {
        alert('Emailing...')
    }

    const chatUs = () => {
        alert('Chatting...')
    }

    const submit = () => {
        e.preventDefault();  
        alert('form submitted')
    }
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-20 flex justify-center items-center">
      <div className="max-w-xl mx-auto w-full">
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
        {/* normal form */}
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input type="text" id="name" placeholder="Enter your name" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea id="message" rows="4" placeholder="Enter your message" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
          </div>

          <button onClick={submit} type="submit" className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
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
