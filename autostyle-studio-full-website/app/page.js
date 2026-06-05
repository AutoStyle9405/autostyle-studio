"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Paintbrush, Wrench, Car, ShieldCheck } from "lucide-react";

const services = [
  ["Боядисване", "Цялостно и детайлно пребоядисване с професионален подход.", Paintbrush],
  ["Полиране и пастиране", "Възстановяване на блясък и премахване на следи по боята.", Sparkles],
  ["Полиране на фарове", "По-добра видимост и свежа визия на автомобила.", ShieldCheck],
  ["Тунинг и бодикит", "По-агресивна, индивидуална и завършена визия.", Wrench],
];

const latestProjects = [
  {
    title: "Honda Civic",
    service: "Възстановяване на боя • Подготовка • Боядисване",
    image: "/projects/honda-civic/paint-1.jpg",
    link: "/projects/honda-civic",
  },
  {
    title: "BMW E61",
    service: "Възстановяване на броня • Подготовка • Боядисване",
    image: "/projects/bmw-e61/paint-1.jpg",
    link: "/projects/bmw-e61",
  },
  {
    title: "Полиране на фарове",
    service: "Възстановяване на прозрачност • Полиране • Финален финиш",
    image: "/projects/headlight-polishing/after-1.jpg",
    link: "/projects/headlight-polishing",
  },
];

export default function Home() {
  return (
    <main className="pt-20">

      <section className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1800&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          alt="AutoStyle Studio"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-autoblack" />
        <div className="absolute w-[700px] h-[700px] bg-red-600/20 blur-[140px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-5xl"
        >
          <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/40 bg-red-600/10 text-red-300 mb-8">
            <Car size={18} /> Premium Auto Studio
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-tight">
            Премиум визия за <span className="text-autored">Вашия автомобил</span>
          </h1>

          <p className="mt-7 text-lg md:text-2xl text-white/75 max-w-3xl mx-auto">
            Боядисване • Полиране • Пастиране • Бодикит • Детайлен финиш
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-autored hover:bg-red-700 rounded-2xl px-8 py-4 font-black text-lg transition"
            >
              Запази час
            </Link>

            <Link
              href="/gallery"
              className="border border-white/20 hover:bg-white hover:text-black rounded-2xl px-8 py-4 font-black text-lg transition"
            >
              Виж галерия
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-black px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Защо да изберете <span className="text-autored">AutoStyle Studio</span>?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-xl">
            <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10">
              ✓ Над 100+ успешно завършени проекта
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10">
              ✓ Професионално оборудване и материали
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10">
              ✓ Индивидуален подход към всеки автомобил
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10">
              ✓ Гаранция за качество и прецизност
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-5 bg-zinc-950">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <h2 className="text-4xl md:text-6xl font-black">
                Последни <span className="text-autored">проекти</span>
              </h2>

              <p className="text-white/60 text-lg mt-4 max-w-2xl">
                Реални резултати от AutoStyle Studio — възстановяване, боядисване,
                полиране и професионален финиш.
              </p>
            </div>

            <Link
              href="/gallery"
              className="text-autored font-black hover:underline"
            >
              Виж всички проекти →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestProjects.map((project) => (
              <Link
                href={project.link}
                key={project.title}
                className="group bg-black border border-white/10 rounded-[2rem] overflow-hidden hover:border-red-600 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </div>

                <div className="p-7">
                  <h3 className="text-3xl font-black mb-3">
                    {project.title}
                  </h3>

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
      </section>

      <section className="py-24 px-5 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-14">
            Основни <span className="text-autored">услуги</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {services.map(([title, text, Icon], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black border border-white/10 hover:border-red-600 rounded-3xl p-7 transition"
              >
                <Icon className="text-autored mb-5" size={34} />

                <h3 className="text-2xl font-black mb-3">
                  {title}
                </h3>

                <p className="text-white/60">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-5 bg-black text-center">
        <h2 className="text-4xl md:text-6xl font-black">
          Качеството започва там,
          <br />
          <span className="text-autored">където компромисът свършва.</span>
        </h2>

        <p className="text-white/60 mt-6 text-lg">
          AutoStyle Studio — Лозница
        </p>

        <Link
          href="/prices"
          className="inline-block mt-10 bg-autored hover:bg-red-700 rounded-2xl px-8 py-4 font-black transition"
        >
          Виж пакети
        </Link>
      </section>

    </main>
  );
}