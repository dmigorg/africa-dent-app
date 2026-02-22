import { useState, useEffect, useRef } from 'react';
import { CheckCircleIcon, ClockIcon, UsersIcon, LightbulbIcon } from '../components/icons';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(rgb(240, 249, 255) 0%, rgb(255, 255, 255) 100%)' }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt="Интерьер детской стоматологической клиники"
                  className="w-full h-auto object-cover"
                  src="./clinic-interior.jpg"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-6 text-white shadow-xl">
                <div className="text-5xl font-bold">7+</div>
                <div className="text-sky-100">
                  лет опыта
                  <br />
                  работы с детьми
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-sky-200 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 right-20 w-16 h-16 bg-yellow-300 rounded-full -z-10 opacity-60" />
            </div>
          </div>

          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />О нашей клинике
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                Заботимся о здоровье <span className="text-sky-600">маленьких улыбок</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Мы понимаем, как важно сделать визит к стоматологу комфортным и безопасным. Команда
                клиники работает с 2019 года и за это время помогла уже более 15000 маленьким
                пациентам и их родителям. Передовые технологии, применяемые в клинике, позволяют
                помогать даже в самых непростых ситуациях и дарить своим пациентам здоровье на
                долгие годы.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Со словами: «Вам только в Африке помогут» — врачи многих стоматологических клиник, в
                том числе и иногородних, отправляют к нам пациентов, потому что мы используем только
                современные методы анестезии с полным контролем жизненных показателей.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div
                className="group p-5 rounded-2xl bg-white shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: '0ms' }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircleIcon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Индивидуальный подход</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Каждому ребёнку подбирается оптимальный план лечения с учетом возраста и
                  индивидуальных показаний.
                </p>
              </div>

              <div
                className="group p-5 rounded-2xl bg-white shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: '100ms' }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <UsersIcon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Опытная команда</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Наши врачи имеют большой опыт в детской стоматологии и анестезиологии.
                </p>
              </div>

              <div
                className="group p-5 rounded-2xl bg-white shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: '200ms' }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ClockIcon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Всё за один визит</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Проводим полное лечение за одну процедуру под наркозом — без стресса для ребенка и
                  родителей.
                </p>
              </div>

              <div
                className="group p-5 rounded-2xl bg-white shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: '300ms' }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <LightbulbIcon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Современное оборудование</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Используем сертифицированное оборудование и материалы последнего поколения для
                  безопасной анестезии и единственные в Республике держим контроль над ситуацией с
                  помощью BIS-мониторинга.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
