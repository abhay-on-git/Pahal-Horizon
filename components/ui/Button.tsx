import React from "react";
import Link from 'next/link'

export const Button = ({ label, href, className = "" }: Buttonprops) => {
  return (
    <div className="cursor-pointer">
        <Link
      href={href || "#"}
      className={`cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] inline-block ${className}`}
    >
      {label}
    </Link>
    </div>
  );
};

