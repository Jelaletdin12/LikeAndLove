import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const RoadmapCarousel = () => {
  const roadmapItems = [
    {
      date: '23.01.2025',
      title: 'Разработка приложения',
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#007AFF]" fill="currentColor">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      )
    },
    {
      date: '23.02.2025',
      title: 'Запуск Telegram MiniApp',
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#007AFF]" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l4 2.5-4 2.5z" />
        </svg>
      )
    },
    {
      date: '23.03.2025',
      title: 'Future Release 1',
      icon: "🎯"
    },
    {
      date: '23.04.2025',
      title: 'Future Release 2',
      icon: "🚀"
    },
    {
      date: '23.05.2025',
      title: 'Future Release 3',
      icon: "⭐"
    }
  ];

  return (
    <div className="bg-[#0A0B17] min-h-screen py-16 px-4">
      {/* Title */}
      <h1 className="text-center text-[#007AFF] text-6xl font-bold mb-16">
        Road Map
      </h1>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          centeredSlides={false}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            }
          }}
          className="pb-12"
        >
          {roadmapItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#007AFF] to-[#F30EFF] opacity-50 blur-lg" />
                
                {/* Card Content */}
                <div className="relative bg-[#0A0B17] rounded-3xl p-8 h-full flex flex-col items-center text-center min-h-[300px]">
                  <div className="text-white text-xl mb-4">{item.date}</div>
                  <div className="text-white text-2xl font-bold mb-8">{item.title}</div>
                  <div className="flex-grow flex items-center justify-center">
                    {typeof item.icon === 'string' ? (
                      <span className="text-6xl">{item.icon}</span>
                    ) : (
                      item.icon
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center gap-2 mt-8">
          {roadmapItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === 0 ? 'bg-[#007AFF]' : 'bg-gray-400 opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapCarousel;