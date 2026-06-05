import Link from "next/link";

const projects = [
  {
    title: "Honda Civic",
    service: "Възстановяване на боя • Подготовка • Боядисване",
    image: "/projects/honda-civic/paint-1.jpg",
    link: "/projects/honda-civic",
  },

  {
    title: "BMW E61",
    service: "Възстановяване на предна броня • Подготовка • Боядисване",
    image: "/projects/bmw-e61/paint-1.jpg",
    link: "/projects/bmw-e61",
  },

  {
    title: "Volkswagen Golf 5",
    service: "Ремонт на калник • Подготовка • Боядисване",
    image: "/projects/golf-5/paint-1.jpg",
    link: "/projects/golf-5",
  },

  {
    title: "Полиране на фарове",
    service: "Възстановяване на прозрачност • Полиране • Финален финиш",
    image: "/projects/headlight-polishing/after-1.jpg",
    link: "/projects/headlight-polishing",
  },
];

export default function Gallery() {
  return (
    <main className="pt-32 px-5 pb-24 bg-autoblack min-h-screen">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Галерия <span className="text-autored">проекти</span>
        </h1>

        <p className="text-white/60 text-xl mb-14 max-w-3xl">
          Реални трансформации от AutoStyle Studio —
          подготовка, боядисване, възстановяване,
          полиране и професионален финиш.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project) => (
            <Link
              href={project.link}
              key={project.title}
              className="group bg-zinc-950 border border-white/10 rounded-[2rem] overflow-hidden hover:border-red-600 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute top-5 left-5 bg-autored px-4 py-2 rounded-full text-sm font-bold">
                  Реален проект
                </div>

              </div>

              <div className="p-7">

                <h2 className="text-3xl font-black mb-3">
                  {project.title}
                </h2>

                <p className="text-white/60 mb-6">
                  {project.service}
                </p>

                <span className="text-autored font-bold">
                  Виж проекта →
                </span>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}