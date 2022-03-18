import { useRef, useEffect } from 'react';
import Image from 'next/image';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Problems({ data }) {
  const container = useRef();
  const q = gsap.utils.selector(container);

  const contentBlocks = data?.contentBlocksCollection?.items;
  const size = 2;
  const problems = Array.from({ length: Math.ceil(contentBlocks.length / size) }, (v, i) =>
    contentBlocks.slice(i * size, i * size + size),
  );

  if (!problems || !problems.length) return <></>;

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 30%',
        end: 'top top',
        scrub: true,
      },
    });
    tl.from(q('.solution'), { y: 400 });
  }, []);

  return (
    <div className="container pt-32 pb-96" ref={container}>
      <h2 className="w-[900px] max-w-full mx-auto text-center">{data.title}</h2>
      <div className="flex flex-wrap pt-20">
        {problems.map((item, index) => {
          const [problem, solution] = item;
          return (
            <div key={index} className="relative w-full px-6 lg:px-12 lg:w-1/3">
              <Image src="/img/icon-purple-minus.svg" height={28} width={28} />
              <div className="mt-6 mb-2 font-medium">{problem.title}</div>
              <div className="leading-7">{problem.subtitle}</div>
              <div className="solution bg-light-gray rounded-xl px-9 py-12 absolute top-24 left-[3%] w-[94%]">
                <Image src="/img/icon-green-check.svg" height={28} width={28} />
                <div className="mt-6 mb-2 font-medium">{solution.title}</div>
                <div className="leading-7">{solution.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
