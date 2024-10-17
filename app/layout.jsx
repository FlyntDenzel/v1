import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "peepUp",
  description: "Created by FlyntDenzel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-5">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
