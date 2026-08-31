import Link from "next/link";

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

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-5 text-sm font-medium sm:gap-8 sm:text-base">
            <li>
              <Link
                href="/"
                className="font-play text-white transition-colors hover:text-[#FEC601]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="font-play text-white transition-colors hover:text-[#FEC601]"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="font-play text-white transition-colors hover:text-[#FEC601]"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}