'use client'
// import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

const Card = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
        <div className="flex flex-col justify-between p-4 bg-white mb-2 mx-5" 
          style={{
            width: '208px',
            height: '168px',
            borderRadius: '20px',
          }}>
          <div className="flex items-center">
            <div className="p-3">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#111111"/>
                <path d="M19.9496 25.4725L13.1992 21.485L19.9486 31L26.7045 21.485L19.9468 25.4725H19.9496ZM20.0522 9L13.3001 20.2044L20.0513 24.1956L26.8026 20.2081L20.0522 9Z" fill="#FEFEFE"/>
              </svg>
            </div>
            <div className="">
              <div className="text-sm" style={{ fontWeight: 800, color: 'black' }}>
                ETH
                <span style={{ fontWeight: 400, color: '#9CA4AB' }}>/USD</span>
              </div>
            </div>
          </div>
          <div className="ml-4 mt-2">
            <div className="text-gray-400" style={{ fontWeight: 400, color: '#9CA4AB', fontSize: '12px' }}>Portofolio</div>
            <div className="flex items-center justify-between w-full">
              <div className="text-2xl font-bold text-gray-800" style={{ fontWeight: 600, fontSize: '18px' }}>$19,654</div>
              <div className="flex items-center mx-5">
                <svg width="46" height="11" viewBox="0 0 46 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG content */}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col justify-between p-4 bg-white mb-2" 
          style={{
            width: '208px',
            height: '168px',
            borderRadius: '20px',
          }}>
          <div className="flex items-center">
            <div className="p-3">
              <Image
                src='/images/iconBtc.png'
                alt="Crypto Wallet"
                width={40}
                height={40}
                className="mx-auto"
              />
            </div>
            <div className="">
              <div className="text-sm" style={{ fontWeight: 800, color: 'black' }}>
                BTC
                <span style={{ fontWeight: 400, color: '#9CA4AB' }}>/USD</span>
              </div>
            </div>
          </div>
          <div className="ml-4 mt-2">
            <div className="text-gray-400" style={{ fontWeight: 400, color: '#9CA4AB', fontSize: '12px' }}>Portofolio</div>
            <div className="flex items-center justify-between w-full">
              <span className="text-2xl font-bold text-gray-800 " style={{ fontWeight: 600, fontSize: '18px' }}>$112,654</span>
              <div className="flex items-center ">
                <svg width="46" height="11" viewBox="0 0 46 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG content */}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* Adicione mais SwiperSlide conforme necessário */}
    </Swiper>
  );
};

export default Card;
