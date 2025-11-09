import { useRef, useEffect } from 'react';

interface MobileVideoProps {
  id?: string;
}

export default function MobileVideo({ id }: MobileVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Автоматический запуск видео при загрузке компонента
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Автовоспроизведение заблокировано:', error);
      });
    }
  }, []);

  return (
    <section id={id} className="relative py-24 lg:py-32 px-6 lg:px-16 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-center gap-4">
          <span className="text-amber-500 text-xl">+</span>
          <h2 className="text-sm lg:text-base font-light tracking-[0.3em]">ПРИЛОЖЕНИЕ</h2>
        </div>

        <h3 className="text-3xl lg:text-5xl xl:text-6xl font-light leading-tight mb-16 max-w-5xl">
          УПРАВЛЯЙТЕ ВАШИМ УМНЫМ ДОМОМ С ЛЮБОГО УСТРОЙСТВА
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* Мобильный телефон с видео */}
          <div className="relative flex-shrink-0">
            {/* Рамка телефона */}
            <div className="relative w-[280px] lg:w-[360px] aspect-[9/19.5] bg-gradient-to-br from-neutral-800 to-black rounded-[3rem] p-3 shadow-2xl">
              {/* Верхняя часть телефона (динамик, камера) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-neutral-700 rounded-full z-30"></div>
              
              {/* Экран телефона */}
              <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                <video
                  ref={videoRef}
                  src="/mobile.mp4"
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay
                />
                {/* Эффект свечения экрана */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Кнопка Home (для iPhone-стиля) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-neutral-700 rounded-full"></div>
            </div>

            {/* Декоративные элементы вокруг телефона */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Текстовый блок */}
          <div className="flex-1 max-w-xl space-y-8">
            <p className="text-base lg:text-lg font-light leading-relaxed text-white/80">
              Наше приложение предоставляет полный контроль над всеми системами умного дома прямо с вашего смартфона. Интуитивный интерфейс, мгновенный отклик и возможность управления из любой точки мира.
            </p>

            <div className="space-y-6">
              {[
                { title: 'УДОБНЫЙ ИНТЕРФЕЙС', desc: 'Интуитивно понятное управление всеми системами' },
                { title: 'УДАЛЁННЫЙ ДОСТУП', desc: 'Контролируйте дом из любой точки мира' },
                { title: 'МГНОВЕННЫЙ ОТКЛИК', desc: 'Быстрая синхронизация и обновление статуса' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group cursor-pointer p-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h4 className="text-lg font-light tracking-wide mb-2 group-hover:text-amber-500 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group relative px-8 py-3 border border-amber-500/30 hover:border-amber-500 rounded-full transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3 text-sm font-light tracking-wider">
                СКАЧАТЬ ПРИЛОЖЕНИЕ
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

