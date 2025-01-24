import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { cookies } from 'next/headers';

const ButtonParrentComponent = async({btnText}: {btnText: string}) => {
    const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'am'; 
  return (
    <ButtonComponent
          path={`${lang}/catalog`}
          name={btnText}
          bg="#5939F5"
          color="#FFFFFF"
          size="14px"
          border="1px solid #5939F5"
          py="9px"
          px="40px"
        />
  )
}   

export default ButtonParrentComponent