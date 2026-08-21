import { Poppins, Montserrat, Orbitron } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DPMF Design & Development — Premium Digital Design & Development",
    template: "%s | DPMF Design & Development",
  },
  description:
    "DPMF Design & Development — a dark-tech, engineered digital design studio. Web design & development, branding, UI/UX, product design, content, and digital strategy.",
  keywords: [
    "digital design agency",
    "web design",
    "web development",
    "branding",
    "UI/UX design",
    "product design",
    "Next.js development",
    "digital strategy",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "DPMF Design & Development",
    title: "DPMF Design & Development",
    description:
      "Premium, engineered digital design & development. Dark-tech, minimal, intentional.",
    url: "/",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${orbitron.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
