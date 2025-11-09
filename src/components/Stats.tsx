import { useEffect, useState, useRef } from 'react';

interface StatsProps {
  id?: string;
}

export default function Stats({ id }: StatsProps) {
  const [counters, setCounters] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);
  const timersRef = useRef<ReturnType<typeof setInterval>[]>([]);

  const stats = [
    { target: 10, suffix: '+', label: 'лет\nопыта' },
    { target: 100, suffix: '+', label: 'довольных\nзаказчиков' },
    { target: 50, suffix: '+', label: 'более 50+\nпроектов' },
  ];

  useEffect(() => {
    const animateCounter = (index: number, target: number) => {
      // Очищаем предыдущий таймер для этого счетчика, если он есть
      if (timersRef.current[index]) {
        clearInterval(timersRef.current[index]);
      }
      
      // Сбрасываем счетчик на 0 перед началом анимации
      setCounters((prev) => {
        const newCounters = [...prev];
        newCounters[index] = 0;
        return newCounters;
      });
      
      const duration = 2000; // 2 секунды
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
          timersRef.current[index] = undefined as any;
        }
        
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, duration / steps);
      
      timersRef.current[index] = timer;
    };

    const startAnimation = () => {
      // Очищаем все предыдущие таймеры
      timersRef.current.forEach((timer) => {
        if (timer) clearInterval(timer);
      });
      timersRef.current = [];
      
      // Анимация всех счетчиков
      stats.forEach((stat, index) => {
        animateCounter(index, stat.target);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const currentSection = sectionRef.current;
    
    // Проверяем, видна ли секция сразу
    if (currentSection) {
      const rect = currentSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        // Если секция уже видна, запускаем анимацию сразу
        setTimeout(startAnimation, 100);
      }
      
      // Всегда подключаем observer для повторных запусков
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
      // Очистка таймеров
      timersRef.current.forEach((timer) => {
        if (timer) clearInterval(timer);
      });
      timersRef.current = [];
    };
  }, []);

  return (
    <section id={id} ref={sectionRef} className="relative py-16 lg:py-24 px-6 lg:px-16 bg-black border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-default"
            >
              <div className="text-5xl lg:text-6xl font-bold mb-4 group-hover:text-amber-500 transition-colors duration-300">
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-sm lg:text-base font-light tracking-wide text-white/60 whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
