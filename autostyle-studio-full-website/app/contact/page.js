export default function Contact() {
  return (
    <main className="pt-32 px-5 pb-24 bg-autoblack">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        <div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Запази <span className="text-autored">час</span>
          </h1>

          <p className="text-white/60 text-xl mb-10">
            Изпрати снимки на автомобила или се свържи директно с нас.
          </p>

          <div className="space-y-5 text-lg">

            <p className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
              📞 +359 876 681 886
            </p>

            <p className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
              📞 +359 877 917 614
            </p>

            <p className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
              📸 Instagram: autostylestudioloznitsa
            </p>

            <p className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
              🎵 TikTok: autostyle.studio
            </p>

            <p className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
              ✉️ autostyle9405@gmail.com
            </p>

            <p className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
              📍 Лозница, България
            </p>

            <p className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
              🕘 Понеделник - Събота: 09:30 - 18:00
              <br />
              Неделя: Почивен ден
            </p>

          </div>

        </div>

        <div className="space-y-6">

          <form className="bg-zinc-950 border border-white/10 rounded-[2rem] p-8 space-y-5">

            <input
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600"
              placeholder="Име"
            />

            <input
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600"
              placeholder="Телефон"
            />

            <input
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600"
              placeholder="Автомобил / Услуга"
            />

            <textarea
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 h-36 outline-none focus:border-red-600"
              placeholder="Съобщение"
            />

            <button
              type="button"
              className="w-full bg-autored hover:bg-red-700 rounded-2xl px-8 py-4 font-black transition"
            >
              Изпрати запитване
            </button>

            <p className="text-white/40 text-sm">
              Формата е демонстрационна. За бърза връзка използвайте телефона.
            </p>

          </form>

          <div className="bg-zinc-950 border border-white/10 rounded-[2rem] overflow-hidden">

            <iframe
              src="https://www.google.com/maps?q=Loznitsa,Bulgaria&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AutoStyle Studio Location"
            ></iframe>

          </div>

        </div>

      </div>

    </main>
  );
}