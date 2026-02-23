import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YouTubeIcon,
} from '../components/icons';
import { getPageData } from '../hooks/usePageData';

const Footer = () => {
  const pageData = getPageData();

  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 7 9.5 7.5 11C8 12.5 8 14 7 15.5C6 17 5 18.5 5 20C5 21 5.5 22 6.5 22C7.5 22 8 21 8.5 20C9 19 9.5 18 10 17.5C10.5 17 11 17 11.5 17.5C12 18 12.5 19 13 20C13.5 21 14 22 15 22C16 22 16.5 21 16.5 20C16.5 18.5 15.5 17 14.5 15.5C13.5 14 13.5 12.5 14 11C14.5 9.5 15 7.5 14.5 5.5C14 3.5 12 2 12 2Z" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold">в Африке</div>
                <div className="text-xs text-slate-400">Стоматология для детей</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Специализируется на безболезненном лечении зубов у детей под наркозом. Более 7 лет
              заботимся о маленьких улыбках.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Услуги</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollTo('#process')}
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  Лечение под наркозом
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  Консультация
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  Диагностика
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#faq')}
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  Профилактика
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">О нас</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  О клинике
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  Врачи
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#faq')}
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  Акции
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${pageData.phone.replace(/\D/g, '')}`}
                    className="text-white hover:text-sky-400 transition-colors"
                  >
                    {pageData.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">{pageData.workingHours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${pageData.email}`}
                  className="text-white hover:text-sky-400 transition-colors"
                >
                  {pageData.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{pageData.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © 2024 в Африке. Все права защищены.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="text-slate-500 hover:text-slate-300 transition-colors text-xs">
                Политика конфиденциальности
              </button>
              <button className="text-slate-500 hover:text-slate-300 transition-colors text-xs">
                Пользовательское соглашение
              </button>
              <button className="text-slate-500 hover:text-slate-300 transition-colors text-xs">
                Лицензии
              </button>
            </div>
            <p className="text-slate-500 text-sm flex items-center gap-1">Сделано для детей</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
