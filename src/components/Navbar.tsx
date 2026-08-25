export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#49261D]/10 bg-[#EEEBDC]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="/"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#49261D]"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#FB4D00]" />
          Daniela Burgos
        </a>

        <div className="flex gap-6 text-xs font-medium uppercase tracking-[0.14em] text-[#49261D] md:gap-9">
          <a
            href="/work"
            className="transition duration-300 hover:text-[#FB4D00]"
          >
            Work
          </a>

          <a
            href="/about"
            className="transition duration-300 hover:text-[#FB4D00]"
          >
            About
          </a>

          <a
            href="/contact"
            className="transition duration-300 hover:text-[#FB4D00]"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}