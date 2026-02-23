import { useEffect, useRef, useState } from 'react';
import { CheckCircleIcon } from '../components/icons';
import { services } from '../data/services';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

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
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={servicesRef}
      className="py-24 bg-gradient-to-br from-sky-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm mb-6">
            Наши услуги
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Полный спектр <span className="text-sky-600">детской стоматологии</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Комплексное лечение зубов для детей от 1 года до 18 лет
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircleIcon className="w-4 h-4 text-sky-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
