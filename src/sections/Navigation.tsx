import { useEffect, useState } from 'react';
import { LogoIcon, MenuIcon, PhoneIcon } from '../components/icons';
import { getPageData } from '../hooks/usePageData';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pageData = getPageData();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              className="flex items-center gap-2 group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-sky-400 to-sky-600">
                <LogoIcon className="w-6 h-6 text-white" />
              </div>
              <div className="transition-colors text-slate-800">
                <div className="font-bold text-lg leading-tight">в Африке</div>
                <div className="text-xs opacity-70">Стоматология для детей</div>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollTo('about')}
                className="font-medium transition-colors hover:text-sky-600 text-slate-700"
              >
                О клинике
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="font-medium transition-colors hover:text-sky-600 text-slate-700"
              >
                Врачи
              </button>
              <button
                onClick={() => scrollTo('faq')}
                className="font-medium transition-colors hover:text-sky-600 text-slate-700"
              >
                Акции
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="font-medium transition-colors hover:text-sky-600 text-slate-700"
              >
                Контакты
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${pageData.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 font-medium transition-colors text-slate-700 hover:text-sky-600"
              >
                <PhoneIcon className="w-4 h-4" />
                {pageData.phone}
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary hover:bg-primary/90 h-9 py-2 px-6 gradient-primary text-white rounded-xl shadow-glow hover:shadow-lg hover:scale-105 transition-all"
              >
                Записаться
              </button>
            </div>

            <button
              className="lg:hidden p-2 rounded-xl transition-colors hover:bg-slate-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-6 pt-20">
            <div className="space-y-4">
              <button
                onClick={() => scrollTo('about')}
                className="block w-full text-left py-3 px-4 rounded-xl text-lg font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                О клинике
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="block w-full text-left py-3 px-4 rounded-xl text-lg font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                Врачи
              </button>
              <button
                onClick={() => scrollTo('faq')}
                className="block w-full text-left py-3 px-4 rounded-xl text-lg font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                Акции
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="block w-full text-left py-3 px-4 rounded-xl text-lg font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                Контакты
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100">
              <a
                href={`tel:${pageData.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-3 py-3 px-4 rounded-xl text-slate-700 hover:bg-sky-50 transition-colors"
              >
                <PhoneIcon className="w-5 h-5 text-sky-600" />
                <span className="font-medium">{pageData.phone}</span>
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-all w-full mt-4 py-4 px-4 gradient-primary text-white rounded-xl"
              >
                Записаться на приём
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
