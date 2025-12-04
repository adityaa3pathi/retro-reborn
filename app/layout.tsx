import { CartProvider } from "./context/CardContext";
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

       <CartProvider>{children}</CartProvider> 
      </body>
    </html>
  );
}
