import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="bg-[#1B2021] shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="logo text-xl font-bold tracking-wide text-[#FEC601] transition-opacity hover:opacity-80 sm:text-2xl"
        >
          Kevin Cross Minchakpu
        </Link>

        <NavLinks />
      </div>
    </header>
  );
}