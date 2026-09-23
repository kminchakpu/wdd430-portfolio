"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];
export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav aria-label="Main navigation" className="relative" w-full={100}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-[#FEC601]/20 hover:text-[#FEC601] md:hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
        )}
      </button>
      <ul className="hidden items-center gap-4 text-sm font-medium md:flex md:gap-7 md:text-base">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href ||
                pathname.startsWith(`${link.href}/`);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`font-play rounded-md px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-[#FEC601] text-black"
                    : "text-white hover:bg-[#FEC601]/20 hover:text-[#FEC601]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      {isOpen && (
        <ul className="fixed left-0 right-0 top-14 z-50 flex flex-col bg-slate-900 p-4 shadow-xl md:hidden">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);
            return (
              <li key={link.href} className="w-full">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-play block w-full rounded-md px-4 py-3 transition-all duration-300 ${
                    isActive
                      ? "bg-[#FEC601] text-black"
                      : "text-white hover:bg-[#FEC601]/20 hover:text-[#FEC601]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}