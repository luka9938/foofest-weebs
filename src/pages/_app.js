import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {
  const { data } = pageProps;

  return (
    <>
      <Header data={data} />
      <Component {...pageProps} />
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
