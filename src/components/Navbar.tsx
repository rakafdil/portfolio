export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2 transform lg:top-8 hover:opacity-100 opacity-10 transition-all">
      <div className="flex items-center gap-6 rounded-full border border-[#425c9c] bg-[rgba(21,32,59,0.8)] px-8 py-4 backdrop-blur-md md:gap-12 md:px-16">
        {["About", "Projects", "Tools", "Experiences", "Contacts"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-stint text-lg text-white transition-colors hover:text-slate-300 md:text-xl"
            >
              {item === "About" ? "About Me" : item}
            </a>
          )
        )}
      </div>
    </nav>
  );
}
