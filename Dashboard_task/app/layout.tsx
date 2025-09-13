import "./globals.css";
import Providers from '../components/Providers';
import Header from '../components/Header';
import { ThemeProvider } from "../context/ThemeContext";
export const metadata = {
  title: 'Auth Demo',
  description: 'Next.js App Router auth demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
        <body>
          <ThemeProvider>
        <Providers>
          <Header />
          {children}
        </Providers>
        </ThemeProvider>
      </body>
      
      
    </html>
  );
}
