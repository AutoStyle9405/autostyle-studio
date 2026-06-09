"use client";

import { useState } from "react";

const answers = {
  prices:
    "Цените започват от 29€ за полиране на фарове. Боядисване, полиране, пастиране и други услуги зависят от състоянието на автомобила.",
  services:
    "Предлагаме боядисване, полиране, пастиране, полиране на фарове, бодикит, керамична вакса, локални ремонти и детайлинг.",
  address:
    "Намираме се в гр. Лозница, ул. Витоша 21.",
  time:
    "Работно време: Понеделник - Събота от 09:30 до 18:00. Неделя: почивен ден.",
  booking:
    "Можете да запазите час чрез контактната форма, WhatsApp или по телефон: 0876 681 886 / 0877 917 614.",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(
    "Здравейте! Как мога да помогна?"
  );

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {open && (
        <div className="mb-4 w-80 bg-zinc-950 border border-white/10 rounded-[2rem] p-5 shadow-2xl">
          <h3 className="text-xl font-black mb-3">
            AutoStyle <span className="text-autored">AI</span>
          </h3>

          <p className="text-white/70 bg-black rounded-2xl p-4 mb-4">
            {message}
          </p>

          <div className="grid gap-2">
            <button onClick={() => setMessage(answers.prices)} className="bg-black hover:bg-zinc-900 border border-white/10 rounded-xl p-3 text-left">
              💰 Цени
            </button>

            <button onClick={() => setMessage(answers.services)} className="bg-black hover:bg-zinc-900 border border-white/10 rounded-xl p-3 text-left">
              🛠️ Услуги
            </button>

            <button onClick={() => setMessage(answers.address)} className="bg-black hover:bg-zinc-900 border border-white/10 rounded-xl p-3 text-left">
              📍 Адрес
            </button>

            <button onClick={() => setMessage(answers.time)} className="bg-black hover:bg-zinc-900 border border-white/10 rounded-xl p-3 text-left">
              🕘 Работно време
            </button>

            <button onClick={() => setMessage(answers.booking)} className="bg-black hover:bg-zinc-900 border border-white/10 rounded-xl p-3 text-left">
              📅 Запази час
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-autored hover:bg-red-700 text-white px-6 py-4 rounded-full font-black shadow-2xl transition hover:scale-105"
      >
        🤖 Попитай AutoStyle
      </button>
    </div>
  );
}