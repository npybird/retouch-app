"use client";

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Image } from "@heroui/image";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { NotificationIcon } from "@/components/icons";
import { SwiperCard } from "@/components/swipercard";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 md:py-10">
      <SwiperCard />
      <div className="inline-block text-center justify-center">
        <Link href="/receipt" className="mb-5">
          <div className="group cursor-pointer w-full max-w-md rounded-xl border p-4 shadow-md dark:shadow-cyan-200 shadow-blue-500 dark:hover:bg-cyan-300 hover:bg-blue-600 transition">
            <Image
              isBlurred
              alt="Receipt to Rewards Campaign"
              className="w-[70%] mx-auto p-5"
              src="/receipt-campaign.png"
            />
            <h2 className="text-xl mb-1 dark:text-cyan-300 text-blue-600 dark:group-hover:text-cyan-600 group-hover:text-blue-300 font-bold">Receipt to Rewards</h2>
            <p className="text-sm dark:text-gray-300 text-gray-600 dark:group-hover:text-gray-600 group-hover:text-gray-300">valid until 31/7/25</p>
          </div>
        </Link>

        <Link href="/luckyWheel" className="mb-5">
          <div className="group cursor-pointer w-full max-w-md rounded-xl border p-4 shadow-md dark:shadow-cyan-200 shadow-blue-500 dark:hover:bg-cyan-300 hover:bg-blue-600 transition">
            <Image
              isBlurred
              alt="Lucky Wheel Campaign"
              className="w-[70%] mx-auto rounded-xl p-5"
              src="/lucky-wheel-campaign.png"
            />
            <h2 className="text-xl mb-1 dark:text-cyan-300 text-blue-600 dark:group-hover:text-cyan-600 group-hover:text-blue-300 font-bold">Lucky Wheel Campaign</h2>
            <p className="text-sm dark:text-gray-300 text-gray-600 dark:group-hover:text-gray-600 group-hover:text-gray-300">valid until 31/7/25</p>
          </div>
        </Link>

        <Link href="/matching" className="mb-5">
          <div className="group cursor-pointer w-full max-w-md rounded-xl border p-4 shadow-md dark:shadow-cyan-200 shadow-blue-500 dark:hover:bg-cyan-300 hover:bg-blue-600 transition">
            <Image
              isBlurred
              alt="Matching Cards Campaign"
              className="w-[70%] mx-auto p-5"
              src="/matching-cards-campaign.png"
            />
            <h2 className="text-xl mb-1 dark:text-cyan-300 text-blue-600 dark:group-hover:text-cyan-600 group-hover:text-blue-300 font-bold">Matching Cards Campaign</h2>
            <p className="text-sm dark:text-gray-300 text-gray-600 dark:group-hover:text-gray-600 group-hover:text-gray-300">valid until 31/7/25</p>
          </div>
        </Link>
      </div>
    </section >
  );
}
