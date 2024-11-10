'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is maybox",
      answer: "Maybox is a customizable subscription service that delivers premium products tailored to your preferences."
    },
    {
      question: "How do I customize my Maybox",
      answer: "You can customize your Maybox by selecting your preferences and choosing from our curated selection of products."
    },
    {
      question: "Can I change my preference later",
      answer: "Yes, you can change your preferences at any time through your account settings."
    },
    {
      question: "what product would be in my box",
      answer: "Your box will contain carefully selected products based on your preferences and profile."
    },
    {
      question: "How often would I get my Maybox",
      answer: "You can choose to receive your Maybox on a monthly, bi-monthly, or quarterly basis."
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:pt-20 ">

  <h2 className="font-custom mx-auto w-full text-3xl text-[#1E1E1E] font-bold text-center mb-8">
    Frequently Asked Questions
  </h2>
  <div className="space-y-4">
    {faqs.map((faq, index) => (
      <div key={index} className="bg-white rounded-xl overflow-hidden">
        <button
          onClick={() => toggleFaq(index)}
          className="w-full flex items-center justify-between p-4 text-left"
        >
          <span className="font-custom">{faq.question}</span>
          <div
            className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
          >
            <svg width="19" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_36_32)">
                <path
                  d="M11.4583 17.9615L7.34375 13.8469C7.24766 13.7474 7.13272 13.668 7.00563 13.6134C6.87854 13.5588 6.74186 13.5301 6.60354 13.5289C6.46523 13.5277 6.32807 13.5541 6.20005 13.6064C6.07203 13.6588 5.95573 13.7362 5.85792 13.834C5.76012 13.9318 5.68277 14.0481 5.6304 14.1761C5.57802 14.3041 5.55166 14.4413 5.55287 14.5796C5.55407 14.7179 5.5828 14.8546 5.6374 14.9817C5.69199 15.1088 5.77134 15.2237 5.87083 15.3198L11.7635 21.2125C11.9589 21.4078 12.2238 21.5175 12.5 21.5175C12.7762 21.5175 13.0411 21.4078 13.2365 21.2125L19.1292 15.3198C19.3189 15.1233 19.4239 14.8602 19.4215 14.5871C19.4192 14.314 19.3096 14.0527 19.1165 13.8596C18.9233 13.6664 18.6621 13.5569 18.389 13.5545C18.1158 13.5521 17.8527 13.6571 17.6563 13.8469L13.5417 17.9615V4.16667C13.5417 3.8904 13.4319 3.62545 13.2366 3.4301C13.0412 3.23475 12.7763 3.125 12.5 3.125C12.2237 3.125 11.9588 3.23475 11.7634 3.4301C11.5681 3.62545 11.4583 3.8904 11.4583 4.16667V17.9615Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_36_32">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </button>
        {openIndex === index && (
          <div className="px-4 pb-4">
            <p className="text-gray-600 text-[13px] font-custom2">{faq.answer}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</div>

  )
}