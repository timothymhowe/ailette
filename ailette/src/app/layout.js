import "./globals.css";

export const metadata = {
  title: "Ailette - Project Studio",
  description: "A project studio building software products and experiments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
