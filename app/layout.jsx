import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "peepUp",
  description: "Created by FlyntDenzel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-5 bg-[#f3f0f0] dark:bg-[#152731ec]">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
