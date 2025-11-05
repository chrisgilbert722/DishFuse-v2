import "./globals.css";

export const metadata = {
  title: "DishFuse",
  description: "AI-powered restaurant profit platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
