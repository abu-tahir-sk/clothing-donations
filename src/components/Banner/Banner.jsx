import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

const Banner = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    fetch("/slider.json")
      .then((res) => res.json())
      .then((data) => setSlider(data));
  }, []);
  return (
    <>
      {slider.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => swiper.update()}
        >
          {slider.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[70vh]">
                <img
                  className="w-full h-full object-cover"
                  src={slide.image}
                  alt={slide.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
                  <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                  <p className="max-w-xl pb-3">{slide.description}</p>
                  <button className="btn bg-cyan-600 border-none hover:bg-gray-800 hover:rounded hover:text-white hover:px-6 hover:p-2">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center">Loading slides...</p>
      )}
    </>
  );
};

export default Banner;
