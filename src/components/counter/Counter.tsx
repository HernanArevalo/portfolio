import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Courier_Prime } from "next/font/google";
import { getViews } from '@/utils/getViews';

const fontCourier = Courier_Prime({ weight: ["400"], subsets: ["latin"] });

export const Counter = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const storedViews = localStorage.getItem("views");

    if (storedViews) {
      setViews(Number(storedViews));
    } else {
      setViews(0);
    }
  }, []);

  useEffect(() => {
    console.log(views);
  }, [views])
  

  return (
    <>{ views &&
    <div className='flex justify-end md:max-w-screen-lg xl:max-w-screen-xl items-center w-full mx-auto px-3'>
      <div className="flex flex-row gap-1 px-1 justify-start items-center h-fit border-gray-600 text-gray-200 border-2 rounded-md w-fit">
        <FaEye />
        <div className={fontCourier.className}>{views ?? "..."}</div>
      </div>
    </div>}
    </>
  );
}
