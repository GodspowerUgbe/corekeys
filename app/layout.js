import "./globals.css";

export const metadata = {
  title: "LUXE | Modern Luxury Real Estate",
  description:
    "Discover exclusive luxury real estate listings, curated architectural masterpieces, and concierge-level service worldwide.",
  keywords: [
    "luxury real estate",
    "modern villas",
    "premium properties",
    "exclusive listings",
    "LUXE real estate",
  ],
  openGraph: {
    title: "LUXE | Modern Luxury Real Estate",
    description:
      "The world's most sophisticated platform for luxury real estate.",
    url: "https://luxerealestate.com",
    siteName: "LUXE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LUXE Luxury Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUXE | Modern Luxury Real Estate",
    description:
      "Exclusive luxury properties and architectural masterpieces.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
