"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const ListMenu = [
    { name: "Home", route: "/" },
    { name: "Services", route: "/service" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
        data-aos="fade-down"
        data-aos-duration="700"
        data-aos-delay="500"
      >
        <div className="backdrop-blur-xl bg-ghost-white/80 border border-slate-200/50 shadow-xl rounded-2xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded flex items-center justify-center shrink-0">
              <img src="/bms-logo.png" alt="logo bms" />
            </div>
            <h4 className="pl-2 text-[10px] font-black uppercase italic leading-none tracking-tighter text-brand-dark">
              PT.Barra Maju Sejahtera
            </h4>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {ListMenu.map((item, index) => {
              const isActive = pathname === item.route;

              return (
                <Link
                  key={index}
                  href={item.route}
                  className={`${
                    isActive
                      ? "text-brand-primary font-bold"
                      : "text-slate-600 font-medium"
                  } hover:text-brand-primary transition-colors text-sm`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none z-50"
          >
            <span
              className={`h-0.5 w-6 bg-brand-primary rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-brand-primary rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-brand-primary rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-3 transition-all duration-300 ease-in-out origin-top ${
            isOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-ghost-white/95 backdrop-blur-lg border border-slate-200/50 shadow-2xl rounded-2xl p-4 flex flex-col gap-4">
            {ListMenu.map((item, index) => {
              const isActive = pathname === item.route;

              return (
                <Link
                  key={index}
                  href={item.route}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-xl transition-all ${
                    isActive
                      ? "bg-brand-primary text-white font-bold"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};
