import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Newsletter } from "@/components/Nyhedsbrev/Newsletter.jsx";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Newsletter></Newsletter>
      <Footer />
    </>
  );
}
