import { useState } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import testiİcon from '../../assets/testiİcon.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const getRandomUserName = () => {
  const users = ['Alice', 'Bob', 'Charlie', 'David', 'Ella', 'Frank', 'Grace', 'Henry']; // Rastgele kullanıcı adları listesi
  return users[Math.floor(Math.random() * users.length)];
};

export default function Testimonials() {
  const [userNames] = useState(Array.from({ length: 5 }, getRandomUserName)); // 5 adet rastgele kullanıcı adı oluştur

  return (
    <div className="mt-[50px] sm:mt-[100px] md:mt-[150px]">
      <h2 className="text-center mx-auto font-bold text-[24px] text-[#262626s] sm:text-[38px] md:text-[48px] mt-[150xp]">
        Our Testimonials
      </h2>
      <p className="mx-auto text-center text-[#333333] text-[14px] sm:text-[16px] md:text-[18px] sm:w-[500px] w-[270px] md:w-[796px]">
        Our satisfied clients share their success stories and experiences on their journey to better health and well-being.
      </p>
      <div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          className="max-w-[1590px]"
          navigation
          pagination={{ clickable: true }}
        >
          <div className="mx-auto ">
            {userNames.map((userName, index) => (
              <SwiperSlide
                key={index}
                className="mt-20 md:w-[518px] sm:w-[413px] w-[358px] h-[282px] md:h-[398px] sm:h-[320px] bg-[#FAFDF2] rounded-lg flex items-center justify-center"
              >
                <div className="max-w-[500px] p-2 md:p-0 md:max-w-[600px] mx-auto text-center sm:text-left">
                  <img src={testiİcon} alt="" className="w-8 mx-auto md:mx-0 sm:w-12 md:w-16" />
                  <p className="text-sm sm:text-base text-gray-700 mt-4">{`"${userName}" has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!`}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
