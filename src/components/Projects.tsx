import { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  videoUrl: string; // YouTube ссылка или локальный файл
  videoFile?: string; // Путь к локальному видео файлу (опционально)
  thumbnailUrl?: string;
}

interface ProjectsProps {
  id?: string;
}

export default function Projects({ id }: ProjectsProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Дом 1000 m2',
      description: 'Объект 1000 м². Умный дом в максимальной комплектации',
      videoUrl: 'https://youtube.com/shorts/2NCoivG6ZDc?si=YlV7QURCk5IKS03N',
    },
    {
      id: 2,
      title: 'Квартира 80 м² в Москве', 
      description: 'Умный дом в действии — управление светом и шторами из приложения, квартира 80 м² в Москве',
      videoUrl: 'https://youtube.com/shorts/iRRipfzSE7k?si=w_BVPMVgdzigxtZC',
    },
    {
      id: 3,
      title: 'Умный дом с Алисой в каждой комнате.',
      description: 'Управление всеми устройствами с помощью голосового управления Яндекс Алиса',
      videoUrl: 'https://youtube.com/shorts/6Z-AkBhlD3I?si=DGneBuMpHMWwhw_i',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const maxIndex = Math.max(0, projects.length - 3);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, projects.length - 3);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    // Автовоспроизведение при наведении
    if (hoveredIndex !== null && videoRefs.current[hoveredIndex]) {
      videoRefs.current[hoveredIndex]?.play().catch(() => {});
    } else {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  }, [hoveredIndex]);

  const getYouTubeVideoId = (url: string): string | null => {
    // Поддержка различных форматов YouTube ссылок
    const patterns = [
      /youtube\.com\/shorts\/([^&\n?#]+)/, // YouTube Shorts
      /(?:youtube\.com\/embed\/|youtu\.be\/)([^&\n?#]+)/, // Embed и короткие ссылки
      /youtube\.com\/watch\?v=([^&\n?#]+)/, // Обычные ссылки
      /youtube\.com\/v\/([^&\n?#]+)/, // Старый формат
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  const getYouTubeThumbnail = (url: string) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  };

  const getYouTubeEmbedUrl = (url: string, autoplay: boolean = false) => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return url;
    return `https://www.youtube.com/embed/${videoId}?${autoplay ? 'autoplay=1&' : ''}mute=1&rel=0`;
  };

  const isYouTubeUrl = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const openModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id={id} className="relative py-24 lg:py-32 px-6 lg:px-16 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-center gap-4">
          <span className="text-amber-500 text-xl">+</span>
          <h2 className="text-sm lg:text-base font-light tracking-[0.3em]">НАШИ ОБЪЕКТЫ</h2>
        </div>

        <h3 className="text-3xl lg:text-5xl xl:text-6xl font-light leading-tight mb-16 max-w-5xl">
          РЕАЛИЗОВАННЫЕ ПРОЕКТЫ УМНОГО ДОМА
        </h3>

        {/* Карусель */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="group cursor-pointer flex flex-col items-center" onClick={() => openModal(project.videoUrl)}>
                    {/* Превью видео в формате YouTube Shorts (вертикальное) */}
                    <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-lg overflow-hidden mb-6 bg-black/20 mx-auto">
                      {/* Локальное видео для превью */}
                      {project.videoFile && !isYouTubeUrl(project.videoUrl) && (
                        <video
                          ref={(el) => {
                            videoRefs.current[index] = el;
                          }}
                          src={project.videoFile}
                          poster={project.thumbnailUrl || getYouTubeThumbnail(project.videoUrl)}
                          className={`w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredIndex === index ? 'opacity-100' : 'opacity-70'
                          }`}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        />
                      )}
                      
                      {/* YouTube iframe для предпросмотра при наведении */}
                      {isYouTubeUrl(project.videoUrl) && hoveredIndex === index && (
                        <iframe
                          src={getYouTubeEmbedUrl(project.videoUrl, true)}
                          className="absolute inset-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`Превью ${project.title}`}
                        />
                      )}
                      
                      {/* YouTube thumbnail для статичного превью */}
                      {isYouTubeUrl(project.videoUrl) && hoveredIndex !== index && (
                        <img
                          src={getYouTubeThumbnail(project.videoUrl)}
                          alt={project.title}
                          className={`w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                      )}
                      
                      {/* Fallback изображение для локальных видео без videoFile */}
                      {!project.videoFile && !isYouTubeUrl(project.videoUrl) && project.thumbnailUrl && (
                        <img
                          src={project.thumbnailUrl}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      {/* Overlay с иконкой play */}
                      <div className={`absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center pointer-events-none ${
                        hoveredIndex === index && isYouTubeUrl(project.videoUrl) ? 'opacity-0' : hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                      }`}>
                        <div className="w-16 h-16 rounded-full bg-amber-500/80 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Текст об объекте */}
                    <div className="w-full max-w-[280px] mx-auto text-center">
                      <h4 className="text-lg lg:text-xl font-light tracking-wide mb-2 group-hover:text-amber-500 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-sm font-light leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопки навигации */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 hover:border-amber-500 flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Предыдущий слайд"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 hover:border-amber-500 flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Следующий слайд"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Индикаторы */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-amber-500 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Модальное окно с видео */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 hover:border-amber-500 flex items-center justify-center transition-all duration-300"
              aria-label="Закрыть"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            {isYouTubeUrl(selectedVideo) ? (
              <iframe
                src={getYouTubeEmbedUrl(selectedVideo, true)}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Видео проекта"
              />
            ) : (
              <video
                src={selectedVideo}
                className="w-full h-full object-contain"
                controls
                autoPlay
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

