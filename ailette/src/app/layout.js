import "./globals.css";

const siteUrl = "https://ailette.io";

export const metadata = {
  title: "Ailette - Project Studio | Timothy M. Howe",
  description: "Ailette is a project studio founded by Timothy M. Howe. Building software products, exploring ideas, and available for freelance work.",
  keywords: ["Timothy Howe", "Timothy M. Howe", "Ailette", "software engineer", "freelance developer", "project studio"],
  authors: [{ name: "Timothy M. Howe", url: siteUrl }],
  creator: "Timothy M. Howe",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ailette - Project Studio | Timothy M. Howe",
    description: "Ailette is a project studio founded by Timothy M. Howe. Building software products, exploring ideas, and available for freelance work.",
    url: siteUrl,
    siteName: "Ailette",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ailette - Project Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ailette - Project Studio | Timothy M. Howe",
    description: "Ailette is a project studio founded by Timothy M. Howe. Building software products, exploring ideas, and available for freelance work.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ailette.io/#organization",
      name: "Ailette",
      url: "https://ailette.io",
      description: "A project studio for solo ventures and freelance work. Building products, exploring ideas, and shipping things that matter.",
      founder: {
        "@id": "https://ailette.io/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://ailette.io/#person",
      name: "Timothy M. Howe",
      jobTitle: "Software Engineer",
      url: "https://ailette.io",
      sameAs: [
        "https://github.com/timothymhowe",
        "https://linkedin.com/in/tmhowe",
      ],
      worksFor: {
        "@id": "https://ailette.io/#organization",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ailette.io/#website",
      url: "https://ailette.io",
      name: "Ailette",
      publisher: {
        "@id": "https://ailette.io/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
