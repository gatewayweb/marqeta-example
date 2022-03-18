import { useRef } from 'react';
import Image from 'next/image';

import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SliderControl = ({ control, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`hidden bg-light-gray rounded-full items-center justify-center h-10 w-10 absolute z-20 disabled:hidden lg:flex ${
        control === 'prev' ? 'swiper-prev left-24' : 'swiper-next right-24 rotate-180'
      }`}
      style={{ top: 'calc(50% - 20px)' }}
    >
      <svg width="10" height="18" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2 20L3.00001 10.8L12.2 1.6" stroke="#2A206A" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </button>
  );
};

export default function Slider({ data }) {
  const container = useRef();
  const q = gsap.utils.selector(container);

  const contentBlocks = data?.contentBlocksCollection?.items;

  return (
    <div className="relative container" ref={container}>
      <SliderControl control="prev" />
      <SliderControl control="next" />
      <Swiper
        loop
        effect="fade"
        autoplay={{ delay: 6000 }}
        slidesPerView={1}
        speed={1000}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        pagination={true}
        navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
        onSlideChangeTransitionStart={() => {
          const image = q('.swiper-slide-active .slide-image');
          const content = q('.swiper-slide-active .slide-title, .swiper-slide-active .slide-content');

          if (image && image.length) {
            gsap.fromTo(image, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1.2 });
          }

          if (content && content.length) {
            gsap.fromTo(content, { y: 100, opacity: 0, delay: 0.5 }, { y: 0, opacity: 1, duration: 0.75, delay: 1.5 });
          }
        }}
      >
        {contentBlocks &&
          contentBlocks.map((block, index) => {
            const image = block?.imagesCollection?.items[0];
            return (
              <SwiperSlide key={index}>
                <div className="bg-white min-h-[500px] flex flex-wrap lg:px-40 lg:pt-24 pb-20">
                  {image && (
                    <div className="relative w-full slide-image flex justify-center lg:order-2 lg:w-1/2 lg:pl-20">
                      <Image src={image?.url} layout="fill" objectFit="contain" alt={block.title} />
                    </div>
                  )}
                  <div className="w-full flex flex-col text-center pt-10 lg:pt-0 lg:w-1/2 lg:pr-16 lg:order-1 lg:text-left">
                    {block?.title && (
                      <h2 className="slide-title flex-grow text-2xl leading-tight xl:text-[40px]">{block.title}</h2>
                    )}
                    {block?.content && (
                      <span
                        className="slide-content text-gray-200 pt-12 text-xs"
                        dangerouslySetInnerHTML={{ __html: block.content }}
                      ></span>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
