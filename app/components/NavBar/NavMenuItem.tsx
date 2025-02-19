import Link from 'next/link';
import React from 'react';
import { cookies } from 'next/headers'; 

interface NavMenuItemProps {
  name: string;
  path: string;
  color?: string;
}

const NavMenuItem: React.FC<NavMenuItemProps> = async ({ name, path, color }) => {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'am'; 

  

  return (
    <li>
      <Link href={`/${lang}${path}`} style={{color:color}} className='text-[14px] focus:border-b border-[#0E0449] pb-[10px] hover:border-b font_color'>{name}</Link>
    </li>
  );
};

export default NavMenuItem;
