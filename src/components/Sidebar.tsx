'use client';

import { sideBarLinks } from '@/constants';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section
      className="sticky top-0 left-0 flex flex-col justify-between w-fit h-screen
     bg-dark-1 text-white p-6 pt-28 max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sideBarLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'flex gap-5 items-center justify-start p-4 rounded-lg',
                isActive && 'bg-blue-1',
              )}>
              <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
