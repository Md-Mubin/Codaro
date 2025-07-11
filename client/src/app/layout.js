import "./globals.css";
import Navbar from "@/Components/Navbar";
import { Roboto } from 'next/font/google';
import Footer from "@/Components/Footer";
import { LanguageProvider } from "../../public/contexts/LanguageContext"; 

const interFont = Roboto({ weight: "400", preload: false })

export const metadata = {
  title: "Codaro",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={interFont.className}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
