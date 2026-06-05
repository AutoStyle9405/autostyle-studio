const packages = [
  [
    "BASIC",
    "139€",
    [
      "Полиране",
      "Пастиране",
      "Освежаване на боята",
      "Финален блясък",
    ],
  ],
  [
    "PREMIUM",
    "249€",
    [
      "По-дълбока корекция",
      "Полиране и пастиране",
      "Premium Finish",
      "Препоръчано за по-захабени автомобили",
    ],
  ],
  [
    "RESTORE",
    "След оглед",
    [
      "Ръжди",
      "Детайлно боядисване",
      "Цялостно боядисване",
      "Бодикит и тунинг елементи",
    ],
  ],
];

const services = [
  ["Полиране на фарове", "49€"],
  ["Пастиране на детайл", "59€"],
  ["Машинно полиране", "149€"],
  ["Цялостно полиране", "249€"],
  ["Боядисване на калник", "199€"],
  ["Боядисване на броня", "249€"],
  ["Боядисване на врата", "249€"],
  ["Боядисване на капак", "299€"],
  ["Локален ремонт", "149€"],
  ["Цялостно боядисване", "до 1699€"],
  ["Монтаж на бодикит", "След оглед"],
];

export default function Prices() {
  return (
    <main className="pt-32 px-5 pb-24 bg-autoblack">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Пакети и <span className="text-autored">цени</span>
        </h1>

        <p className="text-white/60 text-xl mb-14">
          Цените са ориентировъчни и могат да варират според състоянието на автомобила.
        </p>

        <div className="grid md:grid-cols-3 gap-7 mb-24">

          {packages.map(([name, price, features]) => (
            <div
              key={name}
              className="bg-zinc-950 border border-white/10 rounded-[2rem] p-8 hover:border-red-600 transition"
            >
              <h2 className="text-3xl font-black text-autored">
                {name}
              </h2>

              <p className="text-5xl font-black my-7">
                {price}
              </p>

              <ul className="space-y-4 text-white/70">
                {features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <h2 className="text-4xl md:text-6xl font-black mb-12">
          Индивидуални <span className="text-autored">услуги</span>
        </h2>

        <div className="bg-zinc-950 border border-white/10 rounded-[2rem] overflow-hidden">

          {services.map(([service, price], index) => (
            <div
              key={service}
              className={`flex justify-between items-center p-6 ${
                index !== services.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <span className="text-lg md:text-xl font-semibold">
                {service}
              </span>

              <span className="text-autored text-xl md:text-2xl font-black">
                {price}
              </span>
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}