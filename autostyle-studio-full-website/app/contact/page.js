"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const services = [
  "Полиране на фарове",
  "Пастиране на детайл",
  "Машинно полиране",
  "Цялостно полиране",
  "Боядисване на калник",
  "Боядисване на броня",
  "Боядисване на врата",
  "Боядисване на капак",
  "Локален ремонт",
  "Цялостно боядисване",
  "Монтаж на бодикит",
  "Керамична вакса",
  "Възстановяване на лаково покритие",
  "Боядисване на таван",
  "Боядисване на праг",
  "Боядисване на джанти",
  "Хидрографика",
  "Друго",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    car: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Изпращане...");

    try {
      await emailjs.send(
        "service_o6gp2ve",
        "template_auf5r36",
        form,
        "kjrhh8SXm1el6PpVL"
      );

      setStatus("✅ Запитването е изпратено успешно!");
      setForm({
        name: "",
        phone: "",
        service: "",
        car: "",
        message: "",
      });
    } catch (error) {
      setStatus("❌ Грешка при изпращане. Моля, обадете се по телефона.");
    }
  };

  return (
    <main className="pt-32 px-5 pb-24 bg-autoblack">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Запази <span className="text-autored">час</span>
          </h1>

          <p className="text-white/60 text-xl mb-10">
            Изпрати запитване или се свържи директно с нас.
          </p>

          <div className="space-y-5 text-lg">
            <p className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
              📞 +359 876 681 886
            </p>

            <p className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
              📞 +359 877 917 614
            </p>

            <a
              href="https://www.instagram.com/autostylestudioloznitsa"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-zinc-950 border border-white/10 rounded-2xl p-5 hover:border-red-600 transition"
            >
              📸 Instagram: autostylestudioloznitsa
            </a>

            <p className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
              🎵 TikTok: autostyle.studio
            </p>

            <p className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
              ✉️ autostyle9405@gmail.com
            </p>

            <a
              href="https://maps.app.goo.gl/DDToe1rZouZ9w8437"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-zinc-950 border border-white/10 rounded-2xl p-5 hover:border-red-600 transition"
            >
              📍 гр. Лозница, ул. Витоша 21
            </a>

            <p className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
              🕘 Понеделник - Събота: 09:30 - 18:00
              <br />
              Неделя: Почивен ден
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <form
            onSubmit={sendEmail}
            className="bg-zinc-950 border border-white/10 rounded-[2rem] p-8 space-y-5"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600"
              placeholder="Име"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600"
              placeholder="Телефон"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600 text-white"
            >
              <option value="">Избери услуга</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <input
              name="car"
              value={form.car}
              onChange={handleChange}
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600"
              placeholder="Автомобил"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 h-36 outline-none focus:border-red-600"
              placeholder="Съобщение"
            />

            <button
              type="submit"
              className="w-full bg-autored hover:bg-red-700 rounded-2xl px-8 py-4 font-black transition"
            >
              Изпрати запитване
            </button>

            {status && (
              <p className="text-white/70 text-sm text-center">{status}</p>
            )}
          </form>

         <div className="space-y-4">
  <div className="bg-zinc-950 border border-white/10 rounded-[2rem] overflow-hidden">
    <iframe
     src="https://maps.google.com/maps?q=43.374345,26.590232&z=18&output=embed"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="AutoStyle Studio Location"
    ></iframe>
  </div>
  <a
    href="https://maps.google.com/?q=43.374345,26.590232"
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-autored hover:bg-red-700 text-center py-4 rounded-2xl font-black transition"
  >
    📍 Отвори навигация до AutoStyle Studio
  </a>
</div>
        </div>
      </div>
    </main>
  );
}