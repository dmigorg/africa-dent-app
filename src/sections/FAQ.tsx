import { useEffect, useRef, useState } from 'react';

const faqData = [
  {
    question: 'Безопасен ли наркоз для детей?',
    answer:
      'Да, мы используем современные препараты для наркоза, которые абсолютно безопасны для детей. Все препараты сертифицированы и имеют минимальное количество побочных эффектов.',
  },
  {
    question: 'С какого возраста можно лечить зубы под наркозом?',
    answer:
      'Лечение под наркозом возможно с 1 года. Мы проводим лечение детям любого возраста при наличии медицинских показаний.',
  },
  {
    question: 'Как подготовить ребёнка к наркозу?',
    answer:
      'Перед наркозом необходимо сдать общий анализ крови и биохимию. За 6 часов до наркоза нельзя есть, за 2 часа - пить. Наш врач подробно расскажет о подготовке на консультации.',
  },
  {
    question: 'Сколько длится лечение под наркозом?',
    answer:
      'Время лечения зависит от объёма работ. В среднем это занимает от 1 до 3 часов. За это время можно вылечить все зубы, требующие внимания.',
  },
  {
    question: 'Будут ли побочные эффекты после наркоза?',
    answer:
      'Современные препараты практически не вызывают побочных эффектов. В редких случаях возможна лёгкая сонливость в первые часы после пробуждения.',
  },
];

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (faqRef.current) {
      observer.observe(faqRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={faqRef}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-amber-50"
    >
      <div className="absolute top-20 left-10 w-64 h-64 bg-sky-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold text-sm mb-6">
            Вопросы и ответы
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Часто задаваемые <span className="text-sky-600">вопросы</span>
          </h2>
          <p className="text-lg text-slate-600">
            Ответы на самые популярные вопросы о лечении зубов под наркозом
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-slate-800">{item.question}</span>
                <svg
                  className={`w-6 h-6 text-sky-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-slate-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
