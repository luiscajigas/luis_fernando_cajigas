import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashScreen from "./components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luiscajigas.dev"),
  title: "Luis Fernando Cajigas | Desarrollador Full Stack",
  description: "Portfolio de Luis Fernando Cajigas - Desarrollador Full Stack especializado en React, Next.js, Node.js y tecnologías modernas. Diseño y desarrollo web profesional.",
  keywords: [
    "Luis Fernando Cajigas",
    "Desarrollador Full Stack",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Desarrollo Web",
    "Frontend",
    "Backend",
    "Pasto",
    "Colombia"
  ],
  authors: [{ name: "Luis Fernando Cajigas" }],
  creator: "Luis Fernando Cajigas",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://luiscajigas.dev",
    siteName: "Luis Fernando Cajigas - Portfolio",
    title: "Luis Fernando Cajigas | Desarrollador Full Stack",
    description: "Portfolio de Luis Fernando Cajigas - Desarrollador Full Stack especializado en tecnologías modernas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luis Fernando Cajigas - Desarrollador Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Fernando Cajigas | Desarrollador Full Stack",
    description: "Portfolio de Luis Fernando Cajigas - Desarrollador Full Stack especializado en tecnologías modernas.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#1f2937" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Luis Fernando Cajigas",
              "jobTitle": "Desarrollador Full Stack",
              "description": "Desarrollador Full Stack especializado en React, Next.js, Node.js y tecnologías modernas",
              "url": "https://luiscajigas.dev",
              "image": "https://luiscajigas.dev/presentacion.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pasto",
                "addressRegion": "Nariño",
                "addressCountry": "Colombia"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Universidad Cooperativa de Colombia"
              },
              "knowsAbout": [
                "Desarrollo Web",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Python",
                "Django",
                "Frontend Development",
                "Backend Development",
                "Full Stack Development"
              ],
              "sameAs": [
                "https://github.com/luiscajigas",
                "https://www.instagram.com/___luisf_"
              ]
            })
          }}
        />
      </head>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          min-h-screen 
          w-full 
          text-white 
          bg-gradient-to-br 
          from-gray-900 
          via-neutral-900 
          to-black
          selection:bg-blue-500/20 
          selection:text-blue-200
          overflow-x-hidden
        `}
        suppressHydrationWarning={true}
      >
        <div 
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div 
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/3 rounded-full blur-3xl" />
        </div>

        <SplashScreen />
        
        <div className="relative z-10">
          {children}
        </div>

        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Saltar al contenido principal
        </a>
      </body>
    </html>
  );
}