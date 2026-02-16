import { Nunito } from "next/font/google";
import "normalize.css";
import "./globals.css";
import { Header } from "@/Components/Header/Header";
import { Footer } from "@/Components/Footer/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
