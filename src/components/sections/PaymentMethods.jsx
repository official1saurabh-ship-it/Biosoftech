import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const PaymentMethods = () => {
  const methods = [
    { name: 'Credit Card', logo: 'https://via.placeholder.com/200x100?text=Credit+Card' },
    { name: 'Debit Card', logo: 'https://via.placeholder.com/200x100?text=Debit+Card' },
    { name: 'Crypto', logo: 'https://via.placeholder.com/200x100?text=Crypto' },
    { name: 'Wire Transfer', logo: 'https://via.placeholder.com/200x100?text=Wire+Transfer' },
    { name: 'UPI', logo: 'https://via.placeholder.com/200x100?text=UPI+Wallet' },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold mb-4">Payment Methods</h2>
            <p className="text-gray-400">
              We accept payments via all major Credit and Debit Cards, Cryptocurrencies (international), 
              Wire Transfers (Bank Transfers), and UPI/Wallet options (India only).
            </p>
          </div>
          
          <div className="lg:w-2/3 w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {methods.map((method, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl flex justify-center items-center h-24 hover:bg-white/10 transition-colors group">
                    <img 
                      src={method.logo} 
                      alt={method.name} 
                      className="h-full w-auto object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all" 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
