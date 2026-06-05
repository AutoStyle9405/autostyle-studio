import Link from "next/link";

export default function Navbar() {
  const links = [
    ["Начало", "/"],
    ["Услуги", "/services"],
    ["Цени", "/prices"],
    ["Галерия", "/gallery"],
    ["За нас", "/about"],
    ["Контакти", "/contact"],
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <img
            src="/icon.png"
            alt="AutoStyle Studio"
            className="h-14 w-auto"
          />
        </Link>

        <div className="hidden md:flex gap-7 text-white/75 text-sm">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="hover:text-autored transition"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="bg-autored hover:bg-red-700 px-5 py-2 rounded-full font-bold text-sm transition"
        >
          Запази час
        </Link>

      </div>
    </nav>
  );
}