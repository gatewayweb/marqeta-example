import { useEffect } from 'react';
import Image from 'next/image';

import Button from '@components/button';
import LogoRiver from '@components/logo-river';

export default function Hero({ data }) {
  useEffect(() => {
    import('@dotlottie/player-component');
  }, []);

  return (
    <>
      <div className="relative min-h-[600px] xl:min-h-[700px] flex">
        <Image
          src="/img/hero-background.svg"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom right"
          priority={true}
          alt=""
        />
        <div className="relative container">
          <div className="container flex flex-wrap relative lg:flex-nowrap">
            <div className="w-[450px] max-w-full mx-auto pt-[10%] text-center lg:text-left">
              {data?.subtitle && <div className="text-green">{data.subtitle}</div>}
              {data?.title && <h1 className="text-purple mt-5 mb-3">{data.title}</h1>}
              {data?.content && <div className="text-purple mb-10">{data.content}</div>}
              {data?.callToAction && (
                <Button link={data.callToAction?.linkUrl} className="text-lg px-10">
                  {data.callToAction?.linkText}
                </Button>
              )}
            </div>
            <div className="flex flex-grow justify-center w-full lg:w-1/2 pt-8">
              <dotlottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets6.lottiefiles.com/dotlotties/dlf10_plpgcghr.lottie"
                style={{ width: '100%', maxWidth: '100%' }}
              ></dotlottie-player>
            </div>
          </div>
        </div>
      </div>
      <LogoRiver logos={data?.logosCollection?.items} />
    </>
  );
}
