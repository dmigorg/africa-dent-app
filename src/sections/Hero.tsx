import { useRef } from 'react';
import HeroCanvas from './HeroCanvas';
import {
  CalendarIcon,
  ChevronDownIcon,
  PhoneIcon,
  ShieldIcon,
  HeartIcon,
  LightbulbIcon,
  StarIcon,
} from '../components/icons';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      <HeroCanvas />

      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-sky-200/30 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute top-40 right-20 w-16 h-16 rounded-full bg-yellow-200/40 animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-teal-200/30 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-sky-100/40 animate-float"
          style={{ animationDelay: '0.5s' }}
        />

        <StarIcon
          className="absolute top-32 left-[15%] w-8 h-8 text-sky-300/50 animate-bounce-soft"
        />

        <div
          className="absolute bottom-32 right-[20%] w-10 h-10 text-yellow-300/40 animate-bounce-soft"
          style={{ animationDelay: '1s' }}
        >
          <StarIcon className="w-full h-full" />
        </div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 transition-all duration-1000 opacity-100 translate-y-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-soft">
                <LightbulbIcon className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-semibold text-sky-700">
                  Специализируемся на безопасности
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
                  Лечение зубов{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-sky-600">под наркозом</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-yellow-300 -z-0"
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,8 Q50,0 100,8 T200,8"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{' '}
                  для детей
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
                  Безболезненное и безопасное лечение детей для самых маленьких. Современное
                  оборудование, опытные врачи-анестезиологи и забота о вашем ребёнке.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm">
                  <ShieldIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-slate-700">100% безопасность</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm">
                  <HeartIcon className="w-5 h-5 text-rose-500" />
                  <span className="text-sm font-medium text-slate-700">Без страха и боли</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-1 text-lg font-bold px-8 gradient-primary text-white rounded-2xl shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ paddingTop: '3px', paddingBottom: '3px' }}
                >
                  <CalendarIcon className="w-5 h-5" />
                  Записаться на консультацию
                </button>
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-1 text-lg font-bold px-8 border-2 border-sky-400 text-sky-700 rounded-2xl hover:bg-sky-50 transition-all duration-300"
                  style={{ paddingTop: '3px', paddingBottom: '3px' }}
                >
                  <PhoneIcon className="w-5 h-5" />
                  Получить скидку на лечение
                </button>
              </div>

              <div className="flex flex-wrap gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600">0-99</div>
                  <div className="text-sm text-slate-500">Пациенты всех возрастов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600">15000+</div>
                  <div className="text-sm text-slate-500">пролеченных детей</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600">7</div>
                  <div className="text-sm text-slate-500">лет успешной работы</div>
                </div>
              </div>
            </div>

            <div className="relative transition-all duration-1000 delay-300 opacity-100 translate-x-0">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    alt="Детский стоматолог с пациентом"
                    className="w-full h-auto object-cover"
                    src="./hero-dentist.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent" />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-bounce-soft">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-amber-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">Амбассадоры</div>
                      <div className="text-sm text-slate-500">лечения во сне</div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce-soft"
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <img
                        alt=""
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        src="./happy-child.jpg"
                      />
                      <div className="w-8 h-8 rounded-full bg-sky-100 border-2 border-white flex items-center justify-center text-xs font-bold text-sky-600">
                        +1.5к
                      </div>
                    </div>
                    <div className="text-sm font-medium text-slate-700">Довольных родителей</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-sky-600 transition-colors"
        >
          <span className="text-sm font-medium">Узнать больше</span>
          <ChevronDownIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
