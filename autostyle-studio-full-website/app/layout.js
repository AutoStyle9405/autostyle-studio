import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone } from "lucide-react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "AutoStyle Studio | Автобояджийски услуги Лозница",
  description:
    "AutoStyle Studio в гр. Лозница предлага боядисване на автомобили, полиране, пастиране, полиране на фарове, възстановяване на боя, бодикит и детайлен финиш.",
  keywords: [
    "AutoStyle Studio",
    "автобояджия Лозница",
    "боядисване автомобили Лозница",
    "полиране фарове Лозница",
    "пастиране автомобили",
    "полиране автомобили",
    "боядисване на броня",
    "боядисване на калник",
    "автосервиз Лозница",
    "детайлинг Лозница",
  ],
  authors: [{ name: "AutoStyle Studio" }],
  openGraph: {
    title: "AutoStyle Studio | Автобояджийски услуги Лозница",
    description:
      "Боядисване, полиране, пастиране, полиране на фарове, бодикит и premium auto finish в гр. Лозница.",
    url: "https://autostyle-studio.vercel.app",
    siteName: "AutoStyle Studio",
    locale: "bg_BG",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body>
        <Navbar />

        {children}

        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <a href="tel:+359876681886" title="0876 681 886" className="bg-autored hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition hover:scale-110">
            <Phone size={24} />
          </a>

          <a href="tel:+359877917614" title="0877 917 614" className="bg-autored hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition hover:scale-110">
            <Phone size={24} />
          </a>

          <a href="https://wa.me/359876681886?text=Здравейте,%20интересувам%20се%20от%20вашите%20услуги.%20Искам%20да%20запиша%20час." target="_blank" rel="noopener noreferrer" title="WhatsApp" className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition hover:scale-110">
            <FaWhatsapp size={24} />
          </a>

          <a href="https://www.instagram.com/autostylestudioloznitsa" target="_blank" rel="noopener noreferrer" title="Instagram" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-2xl transition hover:scale-110">
            <FaInstagram size={24} />
          </a>

          <a href="https://www.tiktok.com/@autostyle.studio?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" title="TikTok" className="bg-black border border-white/20 text-white p-4 rounded-full shadow-2xl transition hover:scale-110">
            <FaTiktok size={24} />
          </a>
        </div>

        <Footer />
      </body>
    </html>
  );
}