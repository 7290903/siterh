import { X, Plus } from 'lucide-react';
import { useState } from 'react';

interface FAQProps {
  id?: string;
}

export default function FAQ({ id }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'ЧЕМ ОТЛИЧАЕТСЯ ПРОВОДНАЯ СИСТЕМА УМНОГО ДОМА ОТ БЕСПРОВОДНОЙ?',
      answer: (
        <>
          <p className="mb-4">
            Проводные системы умного дома решают несколько задач:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li>оптимизация потребления энергоресурсов</li>
            <li>комфортное и безопасное управление всем комплексом инженерных систем квартиры или здания</li>
          </ul>
          <p>
            Главное отличие – единое приложение абсолютно для всех устройств и отсутствие уязвимого места. В беспроводной системе умного дома приложение у каждого устройства отдельное. А при выходе из строя центрального процессора, перестаёт работать вся система. В проводных системах автоматизации каждое устройство – мини-компьютер. Если одно устройство вышло из строя – все остальное работает!
          </p>
        </>
      ),
    },
    {
      question: 'ЧТО БУДЕТ ЕСЛИ ПЕРЕСТАНЕТ РАБОТАТЬ ИНТЕРНЕТ ИЛИ ОТКЛЮЧИТСЯ ЭЛЕКТРИЧЕСТВО?',
      answer: (
        <p>
          Проводные системы умного дома работают полностью автономно и не требуют интернета для локального управления. Все функции доступны через выключатели, сенсорные панели и приложение в локальной сети. При отключении электричества система сохраняет последние настройки и автоматически восстанавливает их при включении.
        </p>
      ),
    },
    {
      question: 'МОГУТ ЛИ ЗЛОУМЫШЛЕННИКИ ВЗЛОМАТЬ УМНЫЙ ДОМ?',
      answer: (
        <p>
          Проводные системы используют закрытые протоколы связи и шифрование данных. В отличие от беспроводных систем, они не транслируют сигналы в эфир, что значительно снижает риск взлома. Все данные передаются по защищённым кабельным линиям внутри здания.
        </p>
      ),
    },
    {
      question: 'НАДО ЛИ ДЕЛАТЬ УМНЫЙ ДОМ, ЕСЛИ ТРЕБУЕТСЯ ТОЛЬКО ОДНА ЕГО ФУНКЦИЯ?',
      answer: (
        <>
          <p className="mb-4">
            Предположим что в вашем доме большое количество групп освещения, но управление должно быть простым и понятным. В тоже время умный дом ещё умеет шторами управлять и климатом. Вы сомневаетесь, нужен ли вам этот «избыточный» функционал?
          </p>
          <p>
            В таком случае есть единственное правильное решение — не делать то в чем сейчас сомневаетесь, но предусмотреть эти функции при разработке проекта и прокладке кабеля. Таким образом, вы даёте себе волю добавить желаемый функционал в будущем, без каких-либо трудностей.
          </p>
        </>
      ),
    },
    {
      question: 'УМНЫЙ ДОМ ТРЕБУЕТ ДОРОГОГО ОБСЛУЖИВАНИЯ, МНЕ НЕ НУЖНЫ ТАКИЕ ПРОБЛЕМЫ!',
      answer: (
        <p>
          Качественно установленная проводная система умного дома практически не требует обслуживания. Все компоненты рассчитаны на длительную эксплуатацию, а обновления прошивки можно выполнять удалённо. В отличие от беспроводных систем, здесь нет батареек для замены и проблем с сигналом.
        </p>
      ),
    },
    {
      question: 'ВСЕ ЭТО ОЧЕНЬ СЛОЖНО, Я ХОЧУ ПО СТАРИНКЕ!',
      answer: (
        <p>
          Современные системы умного дома спроектированы так, чтобы быть максимально простыми в использовании. Вы можете управлять всем через привычные выключатели, а умные функции будут работать автоматически в фоновом режиме. При этом вы всегда можете вернуться к ручному управлению.
        </p>
      ),
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="relative py-24 lg:py-32 px-6 lg:px-16 bg-neutral-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 flex items-center gap-4">
          <span className="text-amber-500 text-xl">+</span>
          <h2 className="text-sm lg:text-base font-light tracking-[0.3em]">ВОПРОСЫ</h2>
        </div>

        <h3 className="text-3xl lg:text-5xl xl:text-6xl font-light leading-tight mb-16">
          ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 last:border-b-0"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <h4 className="text-lg lg:text-xl font-light tracking-wide pr-8 group-hover:text-amber-500 transition-colors duration-300">
                  {faq.question}
                </h4>
                <div className="flex-shrink-0 text-amber-500">
                  {openIndex === index ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="pb-6 pl-0">
                  <div className="text-base lg:text-lg font-light leading-relaxed text-white/80">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Блок с контактами внизу */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <h4 className="text-xl lg:text-2xl font-light mb-4">
                У ВАС ОСТАЛИСЬ ВОПРОСЫ? СВЯЖИТЕСЬ С НАМИ, И МЫ ОТВЕТИМ
              </h4>
              <p className="text-base font-light text-white/60 mb-6">
                Также вы можете узнать всё самое важное об умном доме,{' '}
                <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors duration-300">
                  посмотрев это видео
                </a>
              </p>
            </div>
            <button className="group relative px-8 py-4 bg-amber-600 hover:bg-amber-700 rounded-full transition-all duration-300 overflow-hidden flex-shrink-0">
              <span className="relative z-10 flex items-center gap-3 text-sm lg:text-base font-light tracking-wider">
                КОНСУЛЬТАЦИЯ В WHATSAPP
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

