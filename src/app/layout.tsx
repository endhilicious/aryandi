import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryandi - Frontend Lead Engineer",
  description: "Portfolio of Muh. Aryandi, a passionate Frontend Lead Engineer specializing in React, Next.js, TypeScript, and modern web technologies. Explore my projects and experience in building scalable web applications.",
  keywords: "Frontend Engineer, React, Next.js, TypeScript, JavaScript, Web Developer, Portfolio, Aryandi",
  authors: [{ name: "Muh. Aryandi" }],
  creator: "Muh. Aryandi",
  openGraph: {
    title: "Aryandi - Frontend Lead Engineer",
    description: "Portfolio of Muh. Aryandi, a passionate Frontend Lead Engineer specializing in React, Next.js, TypeScript, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored ? stored : (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
