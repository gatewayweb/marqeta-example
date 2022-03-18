import Image from 'next/image';

export default function Highlights({ data }) {
  const contentBlocks = data?.contentBlocksCollection?.items;

  if (!contentBlocks || !contentBlocks.length) return <></>;

  return (
    <div className="container pt-12 lg:pt-24">
      <h2 className="w-[900px] max-w-full mx-auto text-center">{data.title}</h2>
      <div className="flex flex-wrap pt-12 lg:pt-32">
        {contentBlocks &&
          contentBlocks.map((block, index) => {
            const image = block?.imagesCollection?.items[0];
            return (
              <div key={index} className="w-full text-center pb-28 lg:w-1/3 ">
                <div className="px-6 lg:px-12">
                  {image && (
                    <div className="relative h-[200px]">
                      <Image src={image?.url} layout="fill" objectFit="contain" alt="Highlight Image" />
                    </div>
                  )}
                  <h3 className="mb-4 mt-8">{block.title}</h3>
                  <div>{block.subtitle}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
