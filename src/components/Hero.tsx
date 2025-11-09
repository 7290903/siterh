import { Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Автоматический запуск видео при загрузке
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Автовоспроизведение заблокировано:', error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/movies.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <nav className="relative z-10 flex justify-between items-center px-6 lg:px-16 py-6">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="text-sm font-light tracking-wider">МЕНЮ</span>
        </button>

        <div className="hidden md:block text-sm font-light tracking-[0.3em]">УМНЫЙ ДОМ</div>

        <button 
          onClick={() => {
            const element = document.getElementById('contacts');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="px-4 md:px-6 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 text-xs md:text-sm font-light tracking-wider"
        >
          ОБСУДИТЬ ПРОЕКТ
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center px-6 lg:px-16 py-6">
              <div className="text-xl font-light tracking-wider">RUNHOUSE</div>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center px-6">
              <div className="space-y-4 md:space-y-6 text-center w-full max-w-2xl">
                {[
                  { label: 'Услуги', id: 'features' },
                  { label: 'Умный дом', id: 'features' },
                  { label: 'Частые вопросы', id: 'faq' },
                  { label: 'Примеры проектов', id: 'projects' },
                  { label: 'Расчёт стоимости', id: 'contacts' },
                  { label: 'Этапы работы', id: 'features' },
                  { label: 'Отзывы', id: 'projects' },
                  { label: 'Шоу-рум', id: 'contacts' },
                  { label: 'О компании', id: 'features' },
                  { label: 'Контакты', id: 'contacts' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      setTimeout(() => {
                        const element = document.getElementById(item.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }}
                    className="block text-xl md:text-2xl lg:text-3xl font-light tracking-wide cursor-pointer hover:text-amber-500 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 leading-none">
          RUNHOUSE
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light tracking-wide mb-12 max-w-2xl">
          ПОЗВОЛЬТЕ СЕБЕ КОМФОРТ ПРЕМИУМ КЛАССА
        </p>
        <button 
          onClick={() => {
            const element = document.getElementById('contacts');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="group relative px-8 md:px-12 py-3 md:py-4 bg-amber-600 hover:bg-amber-700 rounded-full transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3 text-sm lg:text-base font-light tracking-wider">
            РАССЧИТАТЬ СТОИМОСТЬ
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </button>
      </div>

      <div className="relative z-10 px-6 lg:px-16 pb-12">
        <div className="flex items-center gap-8 mb-6">
          <div className="w-px h-16 bg-white/30"></div>
          <p className="max-w-2xl text-sm lg:text-base font-light leading-relaxed">
            Компания — эксперт в индустрии домашней автоматизации. Мы помогаем перейти на новый уровень комфорта и повысить статус вашей недвижимости
          </p>
        </div>
      </div>
    </section>
  );
}
