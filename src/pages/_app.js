import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Newsletter } from "@/components/Nyhedsbrev/Newsletter.jsx";
import { Sponsors } from "@/components/Sponsors/Sponsors.jsx";

export default function App({ Component, pageProps }) {
  const { data } = pageProps;

  return (
    <>
      <Header data={data} />
      <Component {...pageProps} />
      <Newsletter></Newsletter>
      <Sponsors></Sponsors>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const apiUrl = "https://sunrise-innovative-pediatrician.glitch.me/bands";

  const res = await fetch(apiUrl);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
