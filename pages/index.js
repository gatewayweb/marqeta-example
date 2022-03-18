import Head from 'next/head';

import { getPage } from '@lib/contentful';
import findSection from '@lib/findSection';

import Hero from '@components/hero';
import Highlights from '@components/highlights';
import Slider from '@components/slider';
import Problems from '@components/problems';

export default function Home(props) {
  const { page } = props;

  const sections = page?.sectionsCollection?.items;

  const highlights = findSection('Highlights', sections);
  const slider = findSection('Slider', sections);
  const problems = findSection('Problems', sections);

  return (
    <>
      <Head>
        <title>{page.seoTitle}</title>
      </Head>
      {page?.hero && <Hero data={page.hero} />}
      {highlights && <Highlights data={highlights} />}
      {slider && <Slider data={slider} />}
      {problems && <Problems data={problems} />}
    </>
  );
}

export async function getStaticProps() {
  const data = await getPage('3B0mWRICoYM0irNqtAyY2i');

  return { props: data };
}
