import Link from "next/link";

const beforeImages = [
  "/projects/headlight-polishing/before-11.jpg",
  "/projects/headlight-polishing/before-12.jpg",
  "/projects/headlight-polishing/before-2.jpg",
];

const afterImages = [
  "/projects/headlight-polishing/after-1.jpg",
  "/projects/headlight-polishing/after-22.jpg",
  "/projects/headlight-polishing/after-3.jpg",
];

function ImageGrid({ title, images }) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl md:text-4xl font-black mb-8">
        {title} <span className="text-autored">кадри</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={title}
            className="w-full h-[420px] object-cover rounded-[2rem] border border-white/10 hover:scale-[1.02] transition duration-500"
          />
        ))}
      </div>
    </section>
  );
}

export default function HeadlightPolishingProject() {
  return (
    <main className="pt-24 bg-autoblack text-white">
      <section className="relative min-h-[75vh] flex items-end px-5 pb-16 overflow-hidden">
        <img
          src="/projects/headlight-polishing/after-1.jpg"
          alt="Полиране на фарове"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-autoblack via-black/60 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link href="/gallery" className="text-autored font-bold">
            ← Назад към галерията
          </Link>

          <h1 className="text-5xl md:text-8xl font-black mt-8 mb-6">
            Полиране на <span className="text-autored">фарове</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/75 max-w-3xl">
            Възстановяване на прозрачността, премахване на матиране и по-добра визия.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/headlight-polishing/before-11.jpg"
              alt="Фар преди"
              className="h-[520px] w-full object-cover rounded-[2rem] border border-white/10"
            />

            <img
              src="/projects/headlight-polishing/after-1.jpg"
              alt="Фар след"
              className="h-[520px] w-full object-cover rounded-[2rem] border border-white/10"
            />
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-[2rem] p-8 md:p-10">
            <p className="text-autored font-bold mb-3">
              Проект / Полиране на фарове
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              От матиран фар до кристална яснота
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Фаровете бяха матирани и загубили прозрачност. След професионално
              шлайфане и полиране възстановихме чистия външен вид и подобрихме
              визията на автомобила.
            </p>

            <h3 className="text-2xl font-black mb-5">
              Извършени услуги:
            </h3>

            <ul className="space-y-3 text-white/70 text-lg">
              <li>✓ Оглед на състоянието на фаровете</li>
              <li>✓ Обезмасляване и подготовка</li>
              <li>✓ Шлайфане на матирания слой</li>
              <li>✓ Машинно полиране</li>
              <li>✓ Възстановяване на прозрачността</li>
              <li>✓ Финален оглед</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/contact"
                className="bg-autored hover:bg-red-700 rounded-2xl px-8 py-4 font-black transition text-center"
              >
                Запази час
              </Link>

              <a
                href="tel:+359876681886"
                className="border border-white/20 hover:bg-white hover:text-black rounded-2xl px-8 py-4 font-black transition text-center"
              >
                Обади се
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Процесът <span className="text-autored">преди и след</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black border border-white/10 rounded-[2rem] p-7">
              <p className="text-autored font-black text-4xl mb-4">01</p>
              <h3 className="text-2xl font-black mb-3">Преди</h3>
              <p className="text-white/60">
                Матирани и замъглени фарове с намалена прозрачност.
              </p>
            </div>

            <div className="bg-black border border-white/10 rounded-[2rem] p-7">
              <p className="text-autored font-black text-4xl mb-4">02</p>
              <h3 className="text-2xl font-black mb-3">След полиране</h3>
              <p className="text-white/60">
                Възстановена прозрачност и по-чист външен вид.
              </p>
            </div>
          </div>

          <ImageGrid title="Преди" images={beforeImages} />
          <ImageGrid title="След полиране" images={afterImages} />
        </div>
      </section>
    </main>
  );
}