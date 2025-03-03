import { cookies } from 'next/headers';
import Link from 'next/link';
import React, { ReactNode } from 'react';



interface IButtonProps {
  name: string;
  path?: string;
  bg?: string;
  color?: string;
  size?: string;
  py?: string;
  px?: string;
  width?: string;
  icon?: ReactNode;
  customClass?: string;
}
const ServerSideButton = async ({ name, path, bg, color, size, py, px, width,icon, customClass}: IButtonProps) => {
  const currentPath = path && path !== '/calendar' ? `/${path}` : '';
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'am'; 
  

  return (
    <Link href={lang+currentPath}
      style={{
        backgroundColor: bg,
        color: color,
        fontSize: size,
        border: "none",
        padding: `${py} ${px}`,
        width: width,
      }}
      className={`rounded-[4px] freeSans flex ${width ? 'justify-center' : 'justify-start'}  items-center  ${customClass}`}
    >
      {name}
      {icon && <span className="ml-3 text-sm text-white">{icon} </span>}
      </Link>
  );
};

export default ServerSideButton;
