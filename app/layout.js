import './globals.css';
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return(
    <html>
      <Navbar />
      <body>
        <main> {children} </main>
      </body>
    </html>
  )
}