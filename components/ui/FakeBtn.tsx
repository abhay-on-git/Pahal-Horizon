import React from "react";

interface FakeBtnProps {
  children: React.ReactNode;
  className:string,
}

const FakeBtn: React.FC<FakeBtnProps> = ({ children , className }) => {
  return (
    <button
      className={`rounded-full gap-2 text-sm xl:text-md font-medium border-none shadow-sm text-black transition-transform 
      hover:animate-shake3856 ${className}`}
    >
      {children}
    </button>
  );
};

export default FakeBtn;
