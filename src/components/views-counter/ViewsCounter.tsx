"use client";

import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Courier_Prime } from "next/font/google";
import { getViews, updateViews } from "@/utils/getViews";

const fontCourier = Courier_Prime({ weight: ["400"], subsets: ["latin"] });

export const ViewsCounter = () => {
  const [views, setViews] = useState<number>(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let executed = false;

    const handleViews = async () => {
      if (executed) return;
      executed = true;

      try {
        await updateViews();
        const count = await getViews();
        setViews(count);
      } catch (error) {
        console.error("Error loading views:", error);
      } finally {
        setIsReady(true)
      }
    };

    handleViews();
  }, []);

  if (!isReady || views === 0) return null;

  return (
    <div className="flex justify-end md:max-w-screen-lg xl:max-w-screen-xl items-center w-full mx-auto px-3">
      <div className="flex gap-1 px-1 items-center border-gray-600 text-gray-200 border-2 rounded-md w-fit">
        <FaEye />
        <span className={fontCourier.className}>{views}</span>
      </div>
    </div>
  );
};
