'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import { faqs } from '@/data/faqs';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex items-center justify-between"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
        <svg
          className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-600">{answer}</p>
      )}
    </Card>
  );
}

export default function FAQClient() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Find answers to common questions about our services, processes, and how we work.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our team is here to help. Get in touch and we&apos;ll answer any questions you have.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

