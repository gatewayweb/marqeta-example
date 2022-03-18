import Image from 'next/image';

export default function LogoRiver({ logos }) {
  if (!logos || !logos.length) return <></>;

  return (
    <div className="container flex flex-wrap items-center justify-center pt-10 lg:pt-20">
      {logos &&
        logos.map((logo, index) => {
          return (
            <div key={index} className="w-1/2 px-4 pb-4 lg:w-auto lg:px-10">
              <Image src={logo?.url} width={logo?.width} height={logo?.height} />
            </div>
          );
        })}
    </div>
  );
}
