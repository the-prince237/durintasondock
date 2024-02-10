import Link from 'next/link';

export const ExternalLink = ({ href, title }: { href: string; title: string }) => (
  <Link
    legacyBehavior
    className='rounded-[15px] bg-[#6b3030] px-[1.5rem] py-4 text-[1.6rem] text-[#d4c0c0] transition-[0.5s] hover:bg-[#801414]'
    href={href}
  >
    {title}
  </Link>
);
