"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ children, href }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`btn  rounded px-4 py-3 flex justify-center items-center gap-1 ${path === href ? "bg-[#244d3fFF] text-white" : "border-none bg-white text-slate-500"}  `}
    >
      {children}
    </Link>
  );
};

export default MyNavLink;
