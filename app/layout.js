import "./globals.css";

export const metadata = {
  title: "DishFuse | AI Restaurant Profit Platform",
  description: "AI-driven menu, inventory, and profit optimization for restaurants worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Canonical: tells Google which page is the master version */}
        <link rel="canonical" href="https://dishfuse-v2.vercel.app/" />

        {/* Alternate: tell Google which page is the mobile version */}
        <link
          rel="alternate"
          media="only screen and (max-width: 640px)"
          href="https://dishfuse-v2.vercel.app/mobile"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
