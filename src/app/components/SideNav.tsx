"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import KaopizLogo from "./KaopizLogo";
import { useAppSelector } from "../lib/hooks";

export default function SideNav() {
  const toggle = useAppSelector((state) => state.toggleReducer.toggleSideNav);
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className={`mb-2 h-20 flex items-end justify-center items-center rounded-md bg-blue-600 p-4 md:h-40 hidden ${toggle ? "lg:hidden" : "lg:flex"}`}
        href="/dashboard"
      >
        <div
          className={`w-32 text-white flex justify-center items-center flex-col md:w-40`}
        >
          <KaopizLogo />
          <div className="mt-2 text-xl">K-HRM</div>
        </div>
      </Link>
      <Link href="/dashboard" className="mb-2">
        <div
          className={` text-white flex justify-center items-center flex-col md:flex ${toggle ? "lg:flex" : "lg:hidden"}`}
        >
          <KaopizLogo />
        </div>
      </Link>
      <div className="flex grow h-full justify-start flex-col space-x-0 space-y-2">
        <NavLinks toggle={toggle} />
        <div className="hidden h-full w-full grow rounded-md bg-gray-50 lg:block"></div>
      </div>
    </div>
  );
}
