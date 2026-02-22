import { useState, useEffect, useRef } from 'react';
import {
  CalendarIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  UserIcon,
  MessageSquareIcon,
  SendIcon,
  CheckCircleIcon,
  EmailIcon,
} from '../components/icons';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    childAge: '',
    message: '',
  });
  const contactRef = useRef<HTMLDivElement>(null);

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
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={contactRef} className="relative py-24 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sky-50 to-transparent" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-sky-100/30 rounded-full blur-3xl" />
      <div className="absolute top-40 left-10 w-48 h-48 bg-yellow-100/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm mb-6">
            <CalendarIcon className="w-4 h-4" />
            Записаться на приём
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Свяжитесь с <span className="text-sky-600">нами</span>
          </h2>
          <p className="text-lg text-slate-600">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время. Ответим на все вопросы и
            поможем записаться на консультацию.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="space-y-6">
              <a
                href="tel:88352370255"
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-sky-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Телефон</div>
                  <div className="font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
                    8 (8352) 37-02-55
                  </div>
                </div>
              </a>
              <a
                href="mailto:info@vafrike21.ru"
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-sky-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                  <MailIcon className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Электронная почта</div>
                  <div className="font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
                    info@vafrike21.ru
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-sky-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                  <MapPinIcon className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Адрес</div>
                  <div className="font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
                    г. Чебоксары, ул. Ю. Гагарина, 35 Б
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-sky-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                  <ClockIcon className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Режим работы</div>
                  <div className="font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
                    Без выходных с 8:00 до 20:00
                  </div>
                </div>
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaa567ea711568a2ef0eef5aab4c500db4f3db5454af4bccb5771e76516d236eb&amp;source=constructor"
                width="100%"
                height="300"
                frameBorder="0"
                title="Карта проезда"
              />
            </div>
          </div>

          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {isSubmitted ? (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Спасибо!</h3>
                  <p className="text-slate-600">Мы свяжемся с вами в ближайшее время</p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        className="text-sm leading-none select-none text-slate-700 font-medium flex items-center gap-2"
                        htmlFor="name"
                      >
                        <UserIcon className="w-4 h-4 text-sky-500" />
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400 h-12"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm leading-none select-none text-slate-700 font-medium flex items-center gap-2"
                        htmlFor="phone"
                      >
                        <PhoneIcon className="w-4 h-4 text-sky-500" />
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400 h-12"
                        placeholder="8 (999) 123-45-67"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        className="text-sm leading-none select-none text-slate-700 font-medium flex items-center gap-2"
                        htmlFor="email"
                      >
                        <EmailIcon className="w-4 h-4 text-sky-500" />
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400 h-12"
                        placeholder="example@mail.ru"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm leading-none select-none text-slate-700 font-medium flex items-center gap-2"
                        htmlFor="childAge"
                      >
                        <CalendarIcon className="w-4 h-4 text-sky-500" />
                        Возраст ребёнка
                      </label>
                      <input
                        type="text"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className="w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400 h-12"
                        placeholder="Например: 5 лет"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm leading-none select-none text-slate-700 font-medium flex items-center gap-2"
                      htmlFor="message"
                    >
                      <MessageSquareIcon className="w-4 h-4 text-sky-500" />
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400 resize-none"
                      placeholder="Расскажите о проблеме или задайте вопрос..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-70 disabled:cursor-not-allowed w-full gradient-primary text-white font-bold py-3 text-lg rounded-xl shadow-glow hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <SendIcon className="w-5 h-5" />
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
