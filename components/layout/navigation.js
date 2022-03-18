import Link from 'next/link';

const links = [
  {
    href: '#',
    text: 'Platform',
  },
  {
    href: '#',
    text: 'Solutions',
  },
  {
    href: '#',
    text: 'Developers',
  },
  {
    href: '#',
    text: 'Resources',
  },
  {
    href: '#',
    text: 'Company',
  },
];

export default function Navigation() {
  return (
    <div className="flex pl-8">
      {links &&
        links.map((link, index) => {
          return (
            <Link key={index} href={link.href}>
              <a className="text-purple pr-12">{link.text}</a>
            </Link>
          );
        })}
    </div>
  );
}
