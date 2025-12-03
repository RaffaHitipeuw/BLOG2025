import "./globals.css";
import Navbar from "@/components/Landing/Navbar";

export const metadata = {
  metadataBase: new URL("https://blog-raffahitipeuw.vercel.app/"),
  title: {
    default: "BLOG2025©",
  },

  description:
    "A personal blog by Raffa, sharing thoughts, experiments, and insights on web development, design, and the digital world.",

  keywords: [
    "Raffa",
    "Raffa Blog",
    "Frontend Developer",
    "Creative Developer",
    "Tech Blog",
    "Web Development",
    "Coding Articles",
    "UI UX Design",
    "Digital Notes",
  ],

  authors: [{ name: "Raffa Hitipeuw" }],
  creator: "Raffa Hitipeuw",
  publisher: "Raffa Hitipeuw",

  robots: "index, follow",

  alternates: {
    canonical: "https://blog-raffahitipeuw.vercel.app/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog-raffahitipeuw.vercel.app/",
    siteName: "Raffa’s Blog",
    title: "Raffa’s Blog",
    description:
      "A personal space where Raffa writes about coding, design, and digital explorations.",
    images: [
      {
        url: "/og-blog.png",
        width: 1200,
        height: 630,
        alt: "Raffa Blog Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Raffa’s Blog",
    description:
      "A blog by Raffa featuring articles on web development, design, and personal digital insights.",
    images: ["/og-blog.png"],
  },

  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/favicon/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/favicon/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/favicon/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/favicon/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/favicon/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/favicon/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/favicon/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180" },
    ],
    shortcut: "/favicon/favicon.ico",
  },

  manifest: "/manifest.json",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
