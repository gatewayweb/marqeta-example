import Link from 'next/link';

export default function Button({ children, link, color = 'green', className = '' }) {
  let classes = `inline-block bg-green text-purple rounded-xl px-6 py-2 hover:bg-[#1FFBBB] ${className}`;

  return link ? (
    <Link href={link}>
      <a className={classes}>{children}</a>
    </Link>
  ) : (
    <button className={classes}>{children}</button>
  );
}
