export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#ECE5DF] bg-[#FFFDFB]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
        <a href="/" className="text-sm font-semibold tracking-tight">
          Daniela Burgos
        </a>

        <div className="flex gap-8 text-sm text-neutral-600">
          <a href="/work" className="transition hover:text-[#C97C5D]">
            Work
          </a>
          <a href="/about" className="transition hover:text-[#C97C5D]">
            About
          </a>
          <a href="/contact" className="transition hover:text-[#C97C5D]">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}