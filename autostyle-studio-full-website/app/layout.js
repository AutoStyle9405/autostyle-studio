import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, MessageCircle, Instagram } from "lucide-react";

export const metadata = {
  title: "AutoStyle Studio | Premium Car Services",
  description:
    "Боядисване, полиране, пастиране, фарове, тунинг и бодикит.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body>
        <Navbar />

        {children}

        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

          <a
            href="tel:+359876681886"
            title="0876 681 886"
            className="bg-autored hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition hover:scale-110"
          >
            <Phone size={26} />
          </a>

          <a
            href="tel:+359877917614"
            title="0877 917 614"
            className="bg-autored hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition hover:scale-110"
          >
            <Phone size={26} />
          </a>

          <a
            href="https://wa.me/359876681886?text=Здравейте,%20интересувам%20се%20от%20вашите%20услуги.%20Искам%20да%20запиша%20час."
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition hover:scale-110"
          >
            <MessageCircle size={26} />
          </a>

          <a
            href="https://www.instagram.com/autostylestudioloznitsa"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full shadow-2xl transition hover:scale-110"
          >
            <Instagram size={26} />
          </a>

        </div>

        <Footer />
      </body>
    </html>
  );
}