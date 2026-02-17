import Navbar from "./compoents/Navbar";
import "./globals.css";


export const metadata = {
  title: "My App",
  description: "My Next.js application",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />  
        {children}
      </body>
    </html>
  );
}
