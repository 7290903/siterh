import { Thermometer, Lightbulb, Blinds, Shield, Camera, Lock, Music, Tv, Gamepad2 } from 'lucide-react';
import { useState } from 'react';

interface FeaturesProps {
  id?: string;
}

export default function Features({ id }: FeaturesProps) {
  const [activeTab, setActiveTab] = useState('comfort');

  const tabs = [
    { id: 'comfort', label: 'КОМФОРТ' },
    { id: 'security', label: 'БЕЗОПАСНОСТЬ' },
    { id: 'entertainment', label: 'РАЗВЛЕЧЕНИЯ' },
  ];

  const featuresData = {
    comfort: {
      description: 'Освещение, приводы штор и климат-контроль — это системы, обеспечивающие комфорт пребывания в доме. Умный дом позволит объединить управление этими системами в один сценарий, например, «Я дома». Включается освещение, открываются шторы, климат-контроль подготавливает индивидуальную температуру в помещениях. Умный дом создаст идеальную атмосферу для вас и ваших близких.',
      features: [
        {
          icon: <Thermometer className="w-8 h-8" />,
          title: 'КЛИМАТ-КОНТРОЛЬ',
          description: 'Автоматическая регулировка температуры и влажности в каждой комнате для максимального комфорта. Система запоминает ваши предпочтения и создаёт идеальный микроклимат в любое время суток.',
        },
        {
          icon: <Lightbulb className="w-8 h-8" />,
          title: 'УПРАВЛЕНИЕ ОСВЕЩЕНИЕМ',
          description: 'Создавайте идеальные световые сценарии для любого времени суток и настроения. Регулируйте яркость, цветовую температуру и создавайте атмосферу одним касанием.',
        },
        {
          icon: <Blinds className="w-8 h-8" />,
          title: 'ПРИВОДЫ ШТОР И ОКОН',
          description: 'Полностью автоматизированное управление естественным освещением и вентиляцией. Шторы открываются и закрываются по расписанию или в зависимости от времени суток и погоды.',
        },
      ],
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    security: {
      description: 'Антипротечки, видеонаблюдение и охранно-пожарная сигнализация — это основа вашей личной безопасности и безопасности вашего имущества. При наличии умного дома, вы можете интегрировать эти системы в сценарии «Я ушёл», который автоматически включает охранную систему и видеозапись внутри всех помещений когда вы уходите из дома.',
      features: [
        {
          icon: <Shield className="w-8 h-8" />,
          title: 'ЗАЩИТА ОТ ПРОТЕЧЕК',
          description: 'Система автоматически перекрывает воду при обнаружении протечки. Датчики устанавливаются в критических местах и мгновенно реагируют на утечки, предотвращая серьёзные повреждения.',
        },
        {
          icon: <Camera className="w-8 h-8" />,
          title: 'ВИДЕОНАБЛЮДЕНИЕ',
          description: 'Полноценная система видеонаблюдения с записью и удалённым доступом. Просматривайте происходящее в доме из любой точки мира через мобильное приложение.',
        },
        {
          icon: <Lock className="w-8 h-8" />,
          title: 'ОХРАННО-ПОЖАРНАЯ СИГНАЛИЗАЦИЯ',
          description: 'Интегрированная система безопасности с датчиками движения, открытия дверей и окон, а также пожарными датчиками. Автоматическое оповещение на телефон и в службы безопасности.',
        },
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    },
    entertainment: {
      description: 'Домашний кинотеатр, мультирум-аудио и игровые зоны — создайте незабываемые впечатления от развлечений в собственном доме. Управляйте всей медиа-системой из одного приложения, создавайте сценарии для просмотра фильмов, прослушивания музыки или игровых сессий.',
      features: [
        {
          icon: <Tv className="w-8 h-8" />,
          title: 'ДОМАШНИЙ КИНОТЕАТР',
          description: 'Профессиональная система домашнего кинотеатра с проектором, экраном и акустикой премиум-класса. Автоматическое затемнение, настройка звука и изображения одним нажатием.',
        },
        {
          icon: <Music className="w-8 h-8" />,
          title: 'МУЛЬТИРУМ-АУДИО',
          description: 'Синхронизированное воспроизведение музыки во всех комнатах или индивидуальные настройки для каждой зоны. Высококачественный звук в любой точке дома.',
        },
        {
          icon: <Gamepad2 className="w-8 h-8" />,
          title: 'ИГРОВЫЕ ЗОНЫ',
          description: 'Специальные зоны для игр с оптимальным освещением, звуком и комфортом. Интеграция с игровыми консолями и автоматическая настройка всех систем для идеального гейминга.',
        },
      ],
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    },
  };

  const currentData = featuresData[activeTab as keyof typeof featuresData];

  return (
    <section id={id} className="relative py-24 lg:py-32 px-6 lg:px-16 bg-gradient-to-b from-black to-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-center gap-4">
          <span className="text-amber-500 text-xl">+</span>
          <h2 className="text-sm lg:text-base font-light tracking-[0.3em]">ВОЗМОЖНОСТИ</h2>
        </div>

        <h3 className="text-3xl lg:text-5xl xl:text-6xl font-light leading-tight mb-12 max-w-5xl">
          ОТКРОЙТЕ ДЛЯ СЕБЯ РАДОСТЬ УПРАВЛЕНИЯ И СОЗДАНИЯ СОБСТВЕННЫХ СЦЕНАРИЕВ, ПРИНОСЯЩИХ ИСТИННОЕ УДОВОЛЬСТВИЕ
        </h3>

        <div className="flex flex-wrap gap-4 md:gap-8 mb-16 border-b border-white/10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm lg:text-base font-light tracking-wider transition-all duration-300 relative whitespace-nowrap ${
                activeTab === tab.id ? 'text-amber-500' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></div>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <p className="text-base lg:text-lg font-light leading-relaxed text-white/80">
              {currentData.description}
            </p>

            {currentData.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group cursor-pointer p-6 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <div className="text-amber-500 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-light tracking-wide mb-2 group-hover:text-amber-500 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]"
              style={{
                backgroundImage: `url(${currentData.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div
              className="absolute top-4 right-4 md:top-8 md:right-8 bg-black/90 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-xs"
              style={{
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm font-light">Гостиная</span>
                  <span className="text-xl md:text-2xl font-light">23°</span>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-white/10 hover:bg-amber-500/20 transition-colors duration-300 cursor-pointer"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
