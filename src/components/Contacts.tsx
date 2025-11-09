import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

interface ContactsProps {
  id?: string;
}

export default function Contacts({ id }: ContactsProps) {
  return (
    <section id={id} className="relative py-24 lg:py-32 px-6 lg:px-16 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-center gap-4">
          <span className="text-amber-500 text-xl">+</span>
          <h2 className="text-sm lg:text-base font-light tracking-[0.3em]">КОНТАКТЫ</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          {/* Левая колонка - контактная информация */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl lg:text-4xl font-light mb-6">
                СВЯЖИТЕСЬ С НАМИ
              </h3>
              <p className="text-base lg:text-lg font-light text-white/70 mb-8">
                Не стесняйтесь обращаться к нашей команде. Мы всегда рады помочь вам
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-light tracking-[0.2em] text-white/50 mb-2">АДРЕС</h4>
                  <p className="text-base font-light leading-relaxed">
                    УЛ. ПЕТРА МСТИСЛАВЦА 9, МИНСК,<br />
                    МИНСКАЯ ОБЛАСТЬ 220076<br />
                    ТЦ DANA MALL | ТЦ ДАНА МОЛЛ
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-light tracking-[0.2em] text-white/50 mb-2">ТЕЛЕФОН</h4>
                  <a
                    href="tel:+375440000000"
                    className="text-base font-light hover:text-amber-500 transition-colors duration-300"
                  >
                    +375 44 000-00-00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-light tracking-[0.2em] text-white/50 mb-2">EMAIL</h4>
                  <a
                    href="mailto:info@runhouse.by"
                    className="text-base font-light hover:text-amber-500 transition-colors duration-300"
                  >
                    INFO@RUNHOUSE.BY
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-light tracking-[0.2em] text-white/50 mb-2">РЕЖИМ РАБОТЫ</h4>
                <p className="text-base font-light">
                  ПН-ПТ: 10:00-19:00<br />
                  СБ-ВС: ВЫХОДНОЙ
                </p>
              </div>
            </div>
          </div>

          {/* Средняя колонка - форма обратной связи */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-light mb-6">
              У ВАС ОСТАЛИСЬ ВОПРОСЫ? СВЯЖИТЕСЬ С НАМИ И МЫ ОТВЕТИМ
            </h3>
            <p className="text-base font-light text-white/60 mb-8">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light tracking-wide mb-2 text-white/70">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-amber-500 transition-colors duration-300 text-white placeholder-white/30"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-light tracking-wide mb-2 text-white/70">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-amber-500 transition-colors duration-300 text-white placeholder-white/30"
                  placeholder="+375 44 000-00-00"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light tracking-wide mb-2 text-white/70">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-amber-500 transition-colors duration-300 text-white placeholder-white/30 resize-none"
                  placeholder="Расскажите о вашем проекте"
                />
              </div>

              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-amber-600 hover:bg-amber-700 rounded-full transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 text-sm lg:text-base font-light tracking-wider">
                  ОТПРАВИТЬ
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <p className="text-xs font-light text-white/40 text-center">
                Нажимая на кнопку, вы соглашаетесь с{' '}
                <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors duration-300">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </div>

          {/* Правая колонка - карта */}
          <div className="lg:col-span-1">
            <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] rounded-lg overflow-hidden border border-white/10">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=27.5458%2C53.9045&amp;z=16&amp;pt=27.5458%2C53.9045%2Cpm2rdm&amp;text=%D1%83%D0%BB.%20%D0%9F%D0%B5%D1%82%D1%80%D0%B0%20%D0%9C%D1%81%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D1%86%D0%B0%209%2C%20%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%2C%20%D0%A2%D0%A6%20Dana%20Mall"
                width="100%"
                height="100%"
                frameBorder="0"
                className="absolute inset-0"
                title="Карта расположения офиса"
                allowFullScreen
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2">
                <a
                  href="https://yandex.ru/maps/157/minsk/?ll=27.5458%2C53.9045&amp;z=16&amp;text=%D1%83%D0%BB.%20%D0%9F%D0%B5%D1%82%D1%80%D0%B0%20%D0%9C%D1%81%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D1%86%D0%B0%209%2C%20%D0%9C%D0%B8%D0%BD%D1%81%D0%BA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-amber-500 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Открыть в Яндекс Картах
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Футер с дополнительной информацией */}
        <div className="pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-light mb-4">RUNHOUSE</h4>
              <p className="text-sm font-light text-white/60 leading-relaxed mb-4">
                УЛ. ПЕТРА МСТИСЛАВЦА 9, МИНСК,<br />
                МИНСКАЯ ОБЛАСТЬ 220076<br />
                ТЦ DANA MALL | ТЦ ДАНА МОЛЛ
              </p>
              <p className="text-sm font-light text-white/60">
                ПН-ПТ: 10:00-19:00<br />
                СБ-ВС: ВЫХОДНОЙ
              </p>
            </div>

            <div>
              <h4 className="text-sm font-light tracking-[0.2em] text-white/50 mb-6">НАВИГАЦИЯ</h4>
              <div className="space-y-3">
                {['ОТЗЫВЫ', 'ШОУ-РУМ', 'О КОМПАНИИ', 'КОНТАКТЫ', 'УСЛУГИ', 'УМНЫЙ ДОМ', 'ПРОЕКТЫ', 'СТОИМОСТЬ', 'ЭТАПЫ РАБОТЫ'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-sm font-light hover:text-amber-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-light tracking-[0.2em] text-white/50 mb-6">СОЦИАЛЬНЫЕ СЕТИ</h4>
              <div className="flex gap-4 mb-6">
                {['ВК', 'TG', 'YT'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
              <p className="text-xs font-light text-white/40 leading-relaxed">
                Используя сайт вы даёте согласие на обработку ваших персональных данных и подтверждаете, что ознакомились с{' '}
                <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors duration-300">
                  политикой конфиденциальности
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-xs font-light text-white/30">
              © 2012-2024 RUNHOUSE. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

