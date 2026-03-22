import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AATM - Autonomous AI Trading Manager",
  description: "Autonomous AI Trading Manager - AI-powered FX trade analysis platform",
};

// Inline script to prevent FOUC (Flash of Unstyled Content) on theme load
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('aatm-dark-mode');
    var isDark = stored === null ? true : stored === 'true';
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch(e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
