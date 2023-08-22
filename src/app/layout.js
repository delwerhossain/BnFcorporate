import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './globals.css'

export const metadata = {
  title: "B & F CORPORATE",
  description: "An International Associate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body >
        <Header />
        <div className="max-w-7xl mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
