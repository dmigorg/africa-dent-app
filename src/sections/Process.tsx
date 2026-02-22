import { useState, useEffect, useRef } from 'react';
import { CheckCircleIcon, DocumentIcon, StethoscopeIcon, HeartPulseIcon, SparklesIcon, HomeIcon, ArrowRightIcon } from '../components/icons';

const steps = [
  {
    number: '01',
    title: 'Консультация',
    description:
      'Осмотр стоматолога, рентген-диагностика и составление плана лечения. Обсуждаем все детали с родителями.',
    color: 'sky',
    icon: <DocumentIcon className="w-8 h-8 text-white" />,
  },
  {
    number: '02',
    title: 'Осмотр анестезиолога',
    description:
      'Оценка состояния здоровья ребенка, сбор анамнеза, назначение необходимых анализов.',
    color: 'teal',
    icon: <StethoscopeIcon className="w-8 h-8 text-white" />,
  },
  {
    number: '03',
    title: 'Подготовка к процедуре',
    description: 'Ребёнок засыпает. Подключаем мониторинг всех жизненных показателей.',
    color: 'violet',
    icon: <HeartPulseIcon className="w-8 h-8 text-white" />,
  },
  {
    number: '04',
    title: 'Лечение под наркозом',
    description:
      'Проводим все необходимые манипуляции: лечение кариеса, удаление, герметизацию, коронки и другое.',
    color: 'amber',
    icon: <SparklesIcon className="w-8 h-8 text-white" />,
  },
  {
    number: '05',
    title: 'Пробуждение и восстановление',
    description:
      'Ребёнок просыпается в течение 10-15 минут и остается в комнате восстановления под наблюдением врача. Через 1 час можно ехать домой.',
    color: 'rose',
    icon: <HomeIcon className="w-8 h-8 text-white" />,
  },
];

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);

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
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const colorClasses: Record<string, { bg: string; gradient: string; border: string }> = {
    sky: { bg: 'bg-sky-50', gradient: 'from-sky-400 to-sky-500', border: 'hover:border-sky-200' },
    teal: {
      bg: 'bg-teal-50',
      gradient: 'from-teal-400 to-teal-500',
      border: 'hover:border-sky-200',
    },
    violet: {
      bg: 'bg-violet-50',
      gradient: 'from-violet-400 to-violet-500',
      border: 'hover:border-sky-200',
    },
    amber: {
      bg: 'bg-amber-50',
      gradient: 'from-amber-400 to-amber-500',
      border: 'hover:border-sky-200',
    },
    rose: {
      bg: 'bg-rose-50',
      gradient: 'from-rose-400 to-rose-500',
      border: 'hover:border-sky-200',
    },
  };

  return (
    <section id="process" ref={processRef} className="relative py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-sky-200" />
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-yellow-200" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-teal-200" />
        <div className="absolute bottom-20 right-1/3 w-5 h-5 rounded-full bg-rose-200" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            Как проходит лечение
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Обдумать <span className="text-sky-600">шаг за шагом</span>
          </h2>
          <p className="text-lg text-slate-600">
            Мы сделали процесс лечения максимально простым и понятным для родителей. Каждый этап
            контролируется опытными специалистами.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-sky-200 via-teal-200 to-rose-200 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`relative p-6 rounded-3xl h-full flex flex-col ${colorClasses[step.color].bg} border-2 border-transparent hover:border-sky-200 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-xl`}
                >
                  <div
                    className={`absolute -top-4 left-6 w-10 h-10 rounded-xl bg-gradient-to-br ${colorClasses[step.color].gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {step.number}
                  </div>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[step.color].gradient} flex items-center justify-center mb-4 mt-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 w-8 h-8 bg-white rounded-full shadow-md items-center justify-center z-10">
                    <ArrowRightIcon className="w-4 h-4 text-sky-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircleIcon className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-green-800">Безопасность превыше всего</div>
              <div className="text-sm text-green-600">
                Все процедуры проводятся с соблюдением международных стандартов.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
