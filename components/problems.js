import { useRef, useEffect } from 'react';
import Image from 'next/image';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Problems({ data }) {
  const container = useRef();
  const q = gsap.utils.selector(container);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 40%',
        end: 'top 10%',
        scrub: true,
      },
    });

    tl.from(q('.solution'), { y: 400 });

    return () => {
      tl.kill();
    };
  }, []);

  const contentBlocks = data?.contentBlocksCollection?.items;
  const size = 2;
  const problems = Array.from({ length: Math.ceil(contentBlocks.length / size) }, (v, i) =>
    contentBlocks.slice(i * size, i * size + size),
  );

  if (!problems || !problems.length) return <></>;

  const MobileDisplay = ({ index }) => {
    return (
      <div className="px-4 bg-light-gray pt-8 h-full rounded-xl">
        {problems.map((item, key) => {
          const data = item[index];

          return (
            <div key={key} className="relative w-full pb-8">
              {index === 0 ? (
                <Image src="/img/icon-purple-minus.svg" height={28} width={28} alt="Problem Icon" />
              ) : (
                <Image src="/img/icon-green-check.svg" height={28} width={28} alt="Solution Icon" />
              )}
              <div className="leading-7">{data.subtitle}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container pt-32 min-h-[3000px]" ref={container}>
      <div className="hidden lg:block">
        <h2 className="w-[900px] max-w-full mx-auto text-center">{data.title}</h2>
        <div className="flex flex-wrap mt-20">
          {problems.map((item, index) => {
            const [problem, solution] = item;
            return (
              <div key={index} className="relative w-full px-12 lg:w-1/3">
                <Image src="/img/icon-purple-minus.svg" height={28} width={28} alt="Problem Icon" />
                <div className="mt-6 mb-2 font-medium">{problem.title}</div>
                <div className="leading-7">{problem.subtitle}</div>
                <div className="solution bg-light-gray rounded-xl px-9 py-12 absolute top-24 left-[3%] w-[94%]">
                  <Image src="/img/icon-green-check.svg" height={28} width={28} alt="Solution Icon" />
                  <div className="mt-6 mb-2 font-medium">{solution.title}</div>
                  <div className="leading-7">{solution.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:hidden problem--swiper overflow-visible">
        <Swiper spaceBetween={32} pagination={{ el: '.problem-mobile-pagination' }} modules={[Pagination]}>
          <SwiperSlide>
            <MobileDisplay index={0} />
          </SwiperSlide>
          <SwiperSlide>
            <MobileDisplay index={1} />
          </SwiperSlide>
        </Swiper>
        <div className="problem-mobile-pagination flex justify-center pt-7"></div>
      </div>
    </div>
  );
}
