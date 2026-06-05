import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

        <a
          href="tel:+359876681886"
          className="fixed bottom-6 right-6 z-50 bg-autored hover:bg-red-700 text-white px-6 py-4 rounded-full font-black shadow-2xl transition hover:scale-105"
        >
          📞 Обади се
        </a>

        <Footer />
      </body>
    </html>
  );
}