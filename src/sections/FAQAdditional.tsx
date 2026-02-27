import React from 'react';
import { moreQuestions } from '../data/faqQuiz';

const FAQAdditional: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Частые вопросы</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {moreQuestions.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-soft">
              <h4 className="font-bold text-slate-800 mb-2">{item.question}</h4>
              <p className="text-slate-600 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAdditional;
