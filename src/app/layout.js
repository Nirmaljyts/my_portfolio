import "./globals.css";
export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Nirmal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "black" }}>{children}</body>
    </html>
  );
}
