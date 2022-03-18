import Image from 'next/image';

import Navigation from '@components/layout/navigation';

export default function Header() {
  return (
    <header className="bg-light-gray border-b border-border-gray py-7">
      <div className="container flex">
        <Image src="/img/logo.svg" width={157} height={24} />
        <div className="hidden lg:block">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
