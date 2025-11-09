import { Smartphone, Lightbulb, Monitor, Radio, Mic, ScanFace } from 'lucide-react';

interface ControlsProps {
  id?: string;
}

export default function Controls({ id }: ControlsProps) {
  const controlMethods = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'ПРИЛОЖЕНИЕ',
      description: 'Приложение позволяет контролировать все функции дома со смартфона, планшета, смарт-часов и других планшетов. Это интуитивно понятное решение, которое удобно пользоваться в первые же секунды знакомства с ним.',
      image: '/images/mobile.png',
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'ВЫКЛЮЧАТЕЛЬ',
      description: 'Клавиши для умных выключателей — это элегантное и практичное решение для управления освещением, температурой и другими функциями вашего умного дома. Они обеспечивают мгновенный отклик.',
      image: '/images/00023105.jpg',
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: 'СЕНСОРНАЯ ПАНЕЛЬ',
      description: 'Сенсорные панели предлагают полноценный интерфейс управления всеми функциями умного дома. Они могут быть размещены на стене или встроены в мебель, подойдут на любой интерьер.',
      image: '/images/panel.png',
    },
    {
      icon: <Radio className="w-12 h-12" />,
      title: 'ДАТЧИКИ ДВИЖЕНИЯ',
      description: 'Датчики движения, основанные передовыми технологиями, позволяют автоматизировать многие функции умного дома, такие как освещение или системы безопасности.',
      image: '/images/auro-sensors.png',
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: 'ГОЛОСОВОЕ УПРАВЛЕНИЕ',
      description: 'Голосовое управление через ассистентов Яндекс Алиса позволяет вам управлять своим умным домом с помощью голосовых команд. Это удобно и быстро.',
      image: '/images/alice.png',
    },
    {
      icon: <ScanFace className="w-12 h-12" />,
      title: 'FACE ID',
      description: 'Система распознавания лиц обеспечивает автоматическую идентификацию жильцов и гостей. При входе в дом система автоматически настраивает освещение, температуру и другие параметры под ваши предпочтения, создавая персонализированный комфорт.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <section id={id} className="relative py-24 lg:py-32 px-6 lg:px-16 bg-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-amber-500 text-xl">✱</span>
            <h2 className="text-sm lg:text-base font-light tracking-[0.3em] text-amber-500">УПРАВЛЕНИЕ</h2>
          </div>

          <h3 className="text-3xl lg:text-4xl font-light mb-16">
            УПРАВЛЯЙТЕ СВОИМ ДОМОМ ТАК, КАК ВАМ УДОБНО
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {controlMethods.map((method, index) => (
            <div
              key={index}
              className="group cursor-pointer flex flex-col h-full bg-black/20 rounded-lg overflow-hidden"
            >
              <h4 className="text-lg lg:text-xl font-light tracking-wide mb-4 px-4 pt-4 group-hover:text-amber-500 transition-colors duration-300">
                {method.title}
              </h4>
              
              <div className="px-4 mb-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black/20 flex items-center justify-center">
                  <img
                    src={method.image}
                    alt={method.title}
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500 pointer-events-none"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-500 pointer-events-none">
                    {method.icon}
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4 flex-1">
                <p className="text-sm lg:text-base font-light leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-white/10 overflow-hidden">
          <div className="relative w-full">
            {/* Анимированная лента брендов */}
            <div className="flex animate-scroll" style={{ width: 'max-content' }}>
              {/* Первый набор брендов */}
              <div className="flex items-center gap-12 flex-shrink-0">
                {['SAVANT', 'WIRENBOARD', 'LUTRON', 'KNX', 'LINN', 'JVC', 'HDL', 'SONUS FABER'].map((brand, index) => (
                  <div
                    key={`first-${index}`}
                    className="text-xs lg:text-sm font-light tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer whitespace-nowrap"
                  >
                    {brand}
                  </div>
                ))}
              </div>
              {/* Дубликат для бесшовной анимации */}
              <div className="flex items-center gap-12 flex-shrink-0">
                {['SAVANT', 'WIRENBOARD', 'LUTRON', 'KNX', 'LINN', 'JVC', 'HDL', 'SONUS FABER'].map((brand, index) => (
                  <div
                    key={`second-${index}`}
                    className="text-xs lg:text-sm font-light tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer whitespace-nowrap"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
