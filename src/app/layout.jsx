import { Poppins, Montserrat, Orbitron } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  SITE_EMAIL,
  SITE_DESCRIPTION,
  absoluteUrl,
} from "@/lib/site";

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
    default: "DPMF Design & Development | Digital Design Studio",
    template: "%s | DPMF Design & Development",
  },
  description:
    "Premium, dark-tech digital design & development studio. Web design & development, branding, UI/UX, content and digital strategy. Start a project.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  keywords: [
    "digital design agency",
    "web design and development",
    "branding and identity",
    "UI/UX design",
    "product design",
    "design systems",
    "digital strategy",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "DPMF Design & Development | Digital Design Studio",
    description:
      "Premium, engineered digital design & development. Dark-tech, minimal, intentional.",
    url: "/",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "DPMF Design & Development | Digital Design Studio",
    description:
      "Premium, engineered digital design & development. Dark-tech, minimal, intentional.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Site-wide structured data: the organisation and the website itself.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: SITE_NAME,
  url: SITE_URL,
  email: SITE_EMAIL,
  description: SITE_DESCRIPTION,
  logo: absoluteUrl("/opengraph-image"),
  image: absoluteUrl("/opengraph-image"),
  slogan: "Dark-tech, minimal, engineered.",
  knowsAbout: [
    "Web design",
    "Web development",
    "Branding",
    "UI/UX design",
    "Design systems",
    "Digital strategy",
    "SEO",
    "Accessibility",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE_EMAIL,
    contactType: "sales",
    availableLanguage: ["English"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": absoluteUrl("/#organization") },
  inLanguage: "en-GB",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${orbitron.variable}`}
    >
      <body>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
