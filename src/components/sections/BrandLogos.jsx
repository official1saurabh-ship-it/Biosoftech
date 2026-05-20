import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const BrandLogos = () => {
  const brands = [
    { name: '1wiin', logo: 'https://via.placeholder.com/150x80?text=1wiin' },
    { name: '7searchppc', logo: 'https://via.placeholder.com/150x80?text=7SearchPPC' },
    { name: '1xbet', logo: 'https://via.placeholder.com/150x80?text=1xbet' },
    { name: 'mytrip', logo: 'https://via.placeholder.com/150x80?text=mytrip' },
    { name: 'ngo', logo: 'https://via.placeholder.com/150x80?text=NGO' },
    { name: 'bettercupid', logo: 'https://via.placeholder.com/150x80?text=BetterCupid' },
    { name: 'dewaspin777', logo: 'https://via.placeholder.com/150x80?text=DewaSpin777' },
    { name: 'jkmishra', logo: 'https://via.placeholder.com/150x80?text=JKMishra' },
  ];

  return (
    <div className="py-10 bg-gray-50 border-y overflow-hidden">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="brand-swiper"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                <img src={brand.logo} alt={brand.name} className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Custom styles for seamless scrolling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .brand-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}} />
    </div>
  );
};

export default BrandLogos;
