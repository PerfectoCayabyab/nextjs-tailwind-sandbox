import "./globals.css";

export const metadata = {
  title: "Nextjs Tailwind SandBox",
  description: "This is a custom project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
